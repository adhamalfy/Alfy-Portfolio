"use client";

import { useState, useEffect } from "react";

interface UseImageLoadingProps {
  imageSources: string[];
}

interface UseImageLoadingReturn {
  isLoading: boolean;
  loadedImages: number;
  totalImages: number;
  progress: number;
}

export const useImageLoading = ({ imageSources }: UseImageLoadingProps): UseImageLoadingReturn => {
  const [loadedImages, setLoadedImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imageSources.length === 0) {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    const imagePromises = imageSources.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          if (mounted) {
            setLoadedImages((prev) => prev + 1);
          }
          resolve();
        };
        
        img.onerror = () => {
          if (mounted) {
            setLoadedImages((prev) => prev + 1); // Count failed images as loaded to prevent hanging
          }
          resolve(); // Resolve instead of reject to continue loading other images
        };
        
        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      if (mounted) {
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    });

    return () => {
      mounted = false;
    };
  }, [imageSources]);

  const progress = imageSources.length > 0 ? (loadedImages / imageSources.length) * 100 : 100;

  return {
    isLoading,
    loadedImages,
    totalImages: imageSources.length,
    progress
  };
};
