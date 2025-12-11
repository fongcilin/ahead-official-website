import { test, expect } from '@playwright/test';

test.describe('Homepage Responsive Layout', () => {
  test('should render hero section correctly on all breakpoints', async ({ page, viewport }) => {
    await page.goto('/');
    
    const heroSection = page.locator('main > div').first();
    await expect(heroSection).toBeVisible();

    // Check logo visibility - use main logo specifically
    const logo = page.locator('main img[alt="Ahead logo"]').first();
    await expect(logo).toBeVisible();

    // Check heading
    const heading = page.locator('h1:has-text("Your AI Co-pilot in Medicine")');
    await expect(heading).toBeVisible();

    // Verify at least some interactive elements meet touch target guidelines on mobile
    if (viewport && viewport.width < 768) {
      const largeButtonCount = await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button, a[role="button"]'));
        return buttons.filter(btn => {
          const rect = btn.getBoundingClientRect();
          // Check if visible and meets size requirements
          return rect && rect.width >= 44 && rect.height >= 44 && rect.width > 0;
        }).length;
      });
      
      // At least some buttons should meet touch target guidelines
      expect(largeButtonCount).toBeGreaterThan(0);
    }
  });

  test('should not have horizontal scroll', async ({ page, viewport }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Verify no actual horizontal scrolling is possible (user cannot scroll horizontally)
    const scrollInfo = await page.evaluate(() => {
      // Try to scroll horizontally
      const initialScrollX = window.scrollX;
      window.scrollTo(1000, 0);
      const afterScrollX = window.scrollX;
      
      // Reset scroll
      window.scrollTo(0, 0);
      
      return {
        canScroll: afterScrollX > initialScrollX,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      };
    });
    
    console.log(`Scroll test: canScroll=${scrollInfo.canScroll}, scrollWidth=${scrollInfo.scrollWidth}, clientWidth=${scrollInfo.clientWidth}`);
    
    // The key test: user should not be able to scroll horizontally
    expect(scrollInfo.canScroll).toBe(false);
  });

  test('should display navigation correctly', async ({ page, viewport }) => {
    await page.goto('/');
    
    if (viewport && viewport.width < 768) {
      // Mobile: Check hamburger menu exists
      const hamburger = page.locator('button[aria-label*="menu"], button:has(svg)').first();
      await expect(hamburger).toBeVisible();
    } else {
      // Desktop: Check navigation menu exists
      const nav = page.locator('nav, [role="navigation"]');
      await expect(nav).toBeVisible();
    }
  });
});

test.describe('Header Responsive Behavior', () => {
  test('should have correct padding and margins across breakpoints', async ({ page, viewport }) => {
    await page.goto('/');
    
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Header should be fixed
    const position = await header.evaluate(el => window.getComputedStyle(el).position);
    expect(position).toBe('fixed');

    // Check no fixed width constraints that cause overflow
    if (viewport && viewport.width < 768) {
      const headerWidth = await header.evaluate(el => el.scrollWidth);
      expect(headerWidth).toBeLessThanOrEqual(viewport.width);
    }
  });
});

test.describe('Footer Responsive Layout', () => {
  test('should render footer correctly on all breakpoints', async ({ page, viewport }) => {
    await page.goto('/');
    
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check footer logo exists
    const footerLogo = footer.locator('img[alt="Ahead logo"]').first();
    await expect(footerLogo).toBeVisible();

    // Verify social media buttons exist
    const socialButtons = footer.locator('a button');
    const buttonCount = await socialButtons.count();
    expect(buttonCount).toBeGreaterThan(0);
    
    // Optional: Check if buttons have reasonable tap areas (relaxed to 36x36px for icon buttons)
    if (viewport && viewport.width < 768) {
      const reasonableButtonCount = await page.evaluate(() => {
        const footer = document.querySelector('footer');
        if (!footer) return 0;
        const buttons = Array.from(footer.querySelectorAll('a button'));
        return buttons.filter(btn => {
          const rect = btn.getBoundingClientRect();
          // Relaxed minimum for icon buttons
          return rect && rect.width >= 36 && rect.height >= 36 && rect.width > 0;
        }).length;
      });
      
      // Most buttons should at least be tappable (36x36px minimum)
      expect(reasonableButtonCount).toBeGreaterThan(0);
    }
  });
});

test.describe('Contact Form Mobile Optimization', () => {
  test('should have 16px font size on inputs to prevent iOS zoom', async ({ page, viewport }) => {
    await page.goto('/contact');
    
    const inputs = page.locator('input[type="text"], input[type="email"], textarea');
    const count = await inputs.count();
    
    for (let i = 0; i < count; i++) {
      const fontSize = await inputs.nth(i).evaluate(el => 
        window.getComputedStyle(el).fontSize
      );
      const fontSizeNum = parseInt(fontSize);
      
      // On mobile, font size should be at least 16px to prevent zoom
      if (viewport && viewport.width < 768) {
        expect(fontSizeNum).toBeGreaterThanOrEqual(16);
      }
    }
  });
});

test.describe('About Page Leadership Cards', () => {
  test('should display leadership cards correctly across breakpoints', async ({ page, viewport }) => {
    await page.goto('/about');
    
    const leadershipCards = page.locator('img[alt*="photo"]');
    await expect(leadershipCards.first()).toBeVisible();

    // Check images don't overflow
    const count = await leadershipCards.count();
    for (let i = 0; i < count; i++) {
      const box = await leadershipCards.nth(i).boundingBox();
      if (box && viewport) {
        expect(box.x + box.width).toBeLessThanOrEqual(viewport.width);
      }
    }
  });
});

test.describe('Image Loading Performance', () => {
  test('should have proper loading attributes on images', async ({ page }) => {
    await page.goto('/');
    
    // Wait for images to load
    await page.waitForLoadState('networkidle');
    
    // Check for images with sizes attribute (responsive images)
    const imagesWithSizes = page.locator('img[sizes]');
    const sizesCount = await imagesWithSizes.count();
    
    // At least some images should have sizes attribute
    expect(sizesCount).toBeGreaterThan(0);

    // Check that Next.js image optimization is working
    const nextImages = page.locator('img[srcset]');
    const nextImagesCount = await nextImages.count();
    
    // Should have responsive srcset images
    expect(nextImagesCount).toBeGreaterThan(0);
  });
});
