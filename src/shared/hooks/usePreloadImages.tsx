import { useEffect } from "react";

const imageUrlsData: string[] = [
  // '/images/home/bg.png',
  '/images/coin/coin-back.svg',
  '/images/coin/coin-front.png',
];

export const usePreloadImages = (imageUrls?: string[]) => {
  useEffect(() => {
    const images = imageUrls ? [...imageUrlsData, ...imageUrls] : imageUrlsData
    images.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);
};