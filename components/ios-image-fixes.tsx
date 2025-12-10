'use client';

import { useEffect, useCallback, useRef } from 'react';

/**
 * Component to apply image loading fixes for all platforms
 * Handles failed images with retry logic and provides recovery mechanisms
 * Should be included in the app layout
 */
export function IOSImageFixes() {
  const retryCountRef = useRef<Map<string, number>>(new Map());
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 1000; // 1 second

  const retryFailedImage = useCallback((img: HTMLImageElement) => {
    const src = img.dataset.originalSrc || img.src;
    const currentRetries = retryCountRef.current.get(src) || 0;

    if (currentRetries >= MAX_RETRIES) {
      console.warn(`Image failed after ${MAX_RETRIES} retries:`, src);
      return;
    }

    retryCountRef.current.set(src, currentRetries + 1);
    
    // Store original src before clearing
    if (!img.dataset.originalSrc) {
      img.dataset.originalSrc = src;
    }
    
    // Clear and reload with cache busting
    img.src = '';
    setTimeout(() => {
      const cacheBuster = `?retry=${currentRetries + 1}&t=${Date.now()}`;
      img.src = src.includes('?') ? `${src}&t=${Date.now()}` : src + cacheBuster;
    }, RETRY_DELAY);
  }, []);

  const checkAndRepairImages = useCallback(() => {
    // Check all Next.js images with fill layout
    const fillImages = document.querySelectorAll('img[data-nimg="fill"]');
    fillImages.forEach((img) => {
      const element = img as HTMLImageElement;
      // Check if image failed to load (has no natural dimensions and is complete)
      if (element.complete && element.naturalWidth === 0 && element.naturalHeight === 0) {
        retryFailedImage(element);
      }
    });

    // Also check regular images
    const regularImages = document.querySelectorAll('img[data-nimg="1"]');
    regularImages.forEach((img) => {
      const element = img as HTMLImageElement;
      if (element.complete && element.naturalWidth === 0 && element.naturalHeight === 0) {
        retryFailedImage(element);
      }
    });
  }, [retryFailedImage]);

  useEffect(() => {
    // Detect iOS for specific handling
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    if (isIOS) {
      // Add iOS class to body for CSS targeting
      document.body.classList.add('ios-device');
    }

    // Set up global error handler for images
    const handleImageError = (event: Event) => {
      const target = event.target as HTMLImageElement;
      if (target.tagName === 'IMG' && target.dataset.nimg) {
        console.error('Image load error detected:', target.src);
        retryFailedImage(target);
      }
    };

    // Listen for image errors on the document
    document.addEventListener('error', handleImageError, true);

    // Run initial check after page load
    const initialCheck = setTimeout(checkAndRepairImages, 2000);

    // Run periodic check for images that failed silently (less frequent)
    const periodicCheck = setInterval(checkAndRepairImages, 10000);

    // Also check after visibility changes (tab switching)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        setTimeout(checkAndRepairImages, 500);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Check after network reconnection
    const handleOnline = () => {
      console.log('Network reconnected, checking images...');
      setTimeout(checkAndRepairImages, 1000);
    };
    window.addEventListener('online', handleOnline);

    // Clean up
    return () => {
      document.removeEventListener('error', handleImageError, true);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('online', handleOnline);
      clearTimeout(initialCheck);
      clearInterval(periodicCheck);
      if (isIOS) {
        document.body.classList.remove('ios-device');
      }
    };
  }, [checkAndRepairImages, retryFailedImage]);

  return null;
}
