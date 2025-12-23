.PHONY: help setup build up down restart logs clean prune ssl-check backup restore network-create network-check deploy scan test test-ui test-report

# Default image name if not specified
IMAGE_NAME ?= ahead-official-website-nextjs

# Default target
help:
	@echo "NextJS with Caddy Server Deployment Tool"
	@echo ""
	@echo "Usage:"
	@echo "  make setup         - Create external network and prepare environment"
	@echo "  make build         - Build the NextJS application Docker image"
	@echo "  make up            - Start all services"
	@echo "  make down          - Stop all services"
	@echo "  make restart       - Restart all services"
	@echo "  make deploy        - Pull latest changes, build and restart services"
	@echo "  make logs          - View logs from all containers"
	@echo "  make logs-nextjs   - View logs from NextJS container only"
	@echo "  make logs-caddy    - View logs from Caddy container only"
	@echo "  make test          - Run Playwright e2e tests in Docker"
	@echo "  make test-ui       - Run Playwright tests with UI (local)"
	@echo "  make test-report   - Show Playwright test report"
	@echo "  make clean         - Stop and remove containers and networks"
	@echo "  make prune         - Clean and additionally remove volumes and images"
	@echo "  make ssl-check     - Check SSL certificate status"
	@echo "  make backup        - Backup Caddy volumes"
	@echo "  make restore       - Restore Caddy volumes from backup"
	@echo "  make scan          - Scan the default images for vulnerabilities using Trivy"
	@echo "  make scan IMAGE=<image-name> - Scan a specific image"
	@echo "  make IMAGE_NAME=<name> build scan - Build and scan a specific image"

# Setup the environment
setup: network-create
	@echo "Environment setup complete"

# Create external network
network-create:
	@echo "Creating external network..."
	-docker network create external_network 2>/dev/null || true
	@echo "Network setup complete"

# Check if network exists
network-check:
	@docker network inspect external_network >/dev/null 2>&1 || (echo "Network does not exist. Creating..." && docker network create external_network)

# Build the application
build: network-check
	@echo "Building application..."
	DOCKER_BUILDKIT=1 docker-compose build --parallel

# Start services
up: network-check
	@echo "Starting services..."
	docker-compose up -d
	@echo "Services started"
	@echo "Your application should be accessible at https://aheadmedicine.com"

# Stop services
down:
	@echo "Stopping services..."
	docker-compose down
	@echo "Services stopped"

# Restart services
restart: down up

# Deploy: pull latest changes, build and restart
deploy:
	@echo "Deploying latest changes..."
	git pull
	@echo "Git pull complete. Building application..."
	make build
	@echo "Build complete. Restarting services..."
	make restart
	@echo "Deployment complete!"

# View logs
logs:
	docker-compose logs -f

# View NextJS logs
logs-nextjs:
	docker-compose logs -f nextjs

# View Caddy logs
logs-caddy:
	docker-compose logs -f caddy

# Run Playwright e2e tests in Docker
test:
	@echo "Running Playwright e2e tests in Docker..."
	@echo "Building test services..."
	docker-compose --profile test build playwright
	@echo "Starting application and running tests..."
	docker-compose up -d nextjs
	@echo "Waiting for application to be ready..."
	@sleep 10
	docker-compose --profile test run --rm playwright
	@echo "Tests complete. Stopping services..."
	docker-compose down
	@echo "Test report saved to ./playwright-report"

# Run Playwright tests with UI (requires local installation)
test-ui:
	@echo "Running Playwright tests with UI..."
	@npm run test:e2e:ui

# Show Playwright test report
test-report:
	@echo "Opening Playwright test report..."
	@npm run test:e2e:report

# Clean up
clean: down
	@echo "Removing containers and networks..."
	docker-compose down
	@echo "Clean up complete"

# Deep cleaning (use with caution)
prune: clean
	@echo "WARNING: This will remove all unused volumes, images, and networks."
	@read -p "Are you sure you want to continue? [y/N] " confirm; \
	if [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \
		echo "Removing volumes and images..."; \
		docker-compose down -v --rmi all; \
		echo "Prune complete"; \
	else \
		echo "Operation cancelled"; \
	fi

# Check SSL certificates
ssl-check:
	@echo "Checking SSL certificates..."
	docker-compose exec caddy caddy list-certs

# Backup Caddy volumes
backup:
	@echo "Creating backup directory..."
	mkdir -p ./backups
	@echo "Backing up Caddy data volume..."
	docker run --rm -v caddy_data:/data -v $(CURDIR)/backups:/backup alpine tar -czf /backup/caddy_data_$(shell date +%Y%m%d_%H%M%S).tar.gz -C /data .
	@echo "Backing up Caddy config volume..."
	docker run --rm -v caddy_config:/config -v $(CURDIR)/backups:/backup alpine tar -czf /backup/caddy_config_$(shell date +%Y%m%d_%H%M%S).tar.gz -C /config .
	@echo "Backup complete. Files saved in ./backups directory"

# Restore Caddy volumes
restore:
	@echo "Available backups:"
	@ls -la ./backups/
	@echo ""
	@echo "To restore, use:"
	@echo "docker run --rm -v caddy_data:/data -v $(CURDIR)/backups:/backup alpine sh -c 'rm -rf /data/* && tar -xzf /backup/BACKUP_FILENAME -C /data'"
	@echo "docker run --rm -v caddy_config:/config -v $(CURDIR)/backups:/backup alpine sh -c 'rm -rf /config/* && tar -xzf /backup/BACKUP_FILENAME -C /config'"
	@echo ""
	@echo "Replace BACKUP_FILENAME with the actual backup file name"

# Scan Docker images for vulnerabilities using Trivy
scan:
	@if [ -z "$(IMAGE)" ]; then \
		echo "Scanning NextJS image ($(IMAGE_NAME))..."; \
		trivy image $(IMAGE_NAME); \
		echo ""; \
		echo "Scanning Caddy image..."; \
		CADDY_CONTAINER=$$(docker-compose ps -q caddy 2>/dev/null); \
		if [ -n "$$CADDY_CONTAINER" ] && docker inspect "$$CADDY_CONTAINER" >/dev/null 2>&1; then \
			CADDY_IMAGE=$$(docker inspect --format='{{.Image}}' "$$CADDY_CONTAINER" 2>/dev/null); \
			trivy image "$$CADDY_IMAGE"; \
		else \
			echo "Caddy container not running. Scanning official image instead..."; \
			trivy image caddy:2.10.0-alpine; \
		fi; \
	else \
		echo "Scanning $(IMAGE)..."; \
		trivy image $(IMAGE); \
	fi
