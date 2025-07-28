'use client';

import { useState, useCallback, useEffect } from 'react';

/**
 * Hook to handle iOS-specific image loading issues
 * Provides retry mechanism and iOS-specific workarounds
 */
export function useIOSImageFix(src: string, maxRetries: number = 3) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retryCount, setRetryCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check if we're on iOS
  const isIOS = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }, []);

  // Handle image load error with retry
  const handleImageError = useCallback(() => {
    if (retryCount < maxRetries) {
      // Add a small delay before retry to help with iOS
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        // Add timestamp to force reload
        setCurrentSrc(`${src}?retry=${retryCount + 1}&t=${Date.now()}`);
      }, 1000 * (retryCount + 1)); // Progressive delay
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  }, [src, retryCount, maxRetries]);

  // Handle successful image load
  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  // Reset when src changes
  useEffect(() => {
    setCurrentSrc(src);
    setRetryCount(0);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  // iOS-specific image props
  const imageProps = {
    src: currentSrc,
    onLoad: handleImageLoad,
    onError: handleImageError,
    style: isIOS() ? {
      WebkitTransform: 'translateZ(0)',
      transform: 'translateZ(0)',
      WebkitBackfaceVisibility: 'hidden' as const,
      backfaceVisibility: 'hidden' as const,
      willChange: 'transform',
    } : {},
    loading: 'eager' as const, // Disable lazy loading for iOS
  };

  return {
    imageProps,
    isLoading,
    hasError,
    retryCount,
    isIOS: isIOS(),
  };
}
