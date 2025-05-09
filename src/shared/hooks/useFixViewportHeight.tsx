import { useEffect } from "react";
import { useTelegram } from "./useTelegram";

export const useFixViewportHeight = () => {
  const { webApp } = useTelegram();

  useEffect(() => {
    if (!webApp) return;

    const updateStableViewportHeight = () => {
      const stableHeight = webApp.viewportStableHeight;
      document.documentElement.style.setProperty('--tg-viewport-stable-height', `${stableHeight}px`);
    };

    const handleViewportChange = (event: any) => {
      if (event.isStateStable) {
        updateStableViewportHeight();
      }
    };

    webApp.onEvent('viewportChanged', handleViewportChange);
    updateStableViewportHeight();

    return () => {
      webApp.offEvent('viewportChanged', handleViewportChange);
    };
  }, [webApp]);
};
