'use client';

import { useEffect } from 'react';

/**
 * Component to apply iOS-specific fixes
 * Should be included in the app layout
 */
export function IOSImageFixes() {
  useEffect(() => {
    // Detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    if (isIOS) {
      // Add iOS class to body for CSS targeting
      document.body.classList.add('ios-device');
      
      // Force repaint for images that failed to load
      const forceRepaint = () => {
        const images = document.querySelectorAll('img[data-nimg="fill"]');
        images.forEach((img) => {
          const element = img as HTMLImageElement;
          // Check if image failed to load (has no natural width/height)
          if (element.naturalWidth === 0 && element.naturalHeight === 0) {
            // Force reload by updating src
            const originalSrc = element.src;
            element.src = '';
            setTimeout(() => {
              element.src = originalSrc;
            }, 100);
          }
        });
      };
      
      // Run on initial load
      setTimeout(forceRepaint, 1000);
      
      // Run periodically to catch any missed images
      const interval = setInterval(forceRepaint, 5000);
      
      // Clean up
      return () => {
        clearInterval(interval);
        document.body.classList.remove('ios-device');
      };
    }
  }, []);

  return null;
}
