.PHONY: help setup build up down restart logs clean prune ssl-check backup restore network-create network-check deploy

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
	@echo "  make clean         - Stop and remove containers and networks"
	@echo "  make prune         - Clean and additionally remove volumes and images"
	@echo "  make ssl-check     - Check SSL certificate status"
	@echo "  make backup        - Backup Caddy volumes"
	@echo "  make restore       - Restore Caddy volumes from backup"

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
	docker-compose build

# Start services
up: network-check
	@echo "Starting services..."
	docker-compose up -d
	@echo "Services started"
	@echo "Your application should be accessible at https://test.aheadmedicine.com"

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
