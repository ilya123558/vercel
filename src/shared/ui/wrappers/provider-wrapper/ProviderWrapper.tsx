'use client'
import { store } from "@/views/store";
import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';
import { usePreloadImages } from "@/shared/hooks/usePreloadImages";
import { usePreventZoom } from "@/shared/hooks/usePreventZoom";
import { useTelegram } from "@/shared/hooks/useTelegram";
import { useGetDevice } from "@/shared/hooks/useGetDevice";

export const ProviderWrapper = ({children}: PropsWithChildren) => {
  usePreventZoom()
  usePreloadImages()
  const { webApp } = useTelegram()
  const { getDevices, getTelegramTopPaddingValue } = useGetDevice()

  useEffect(() => {
    if (typeof window !== "undefined" && !window.Telegram) {
      const script = document.createElement('script');
      script.src = "https://telegram.org/js/telegram-web-app.js?57";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    try{
      if (webApp) {
        const { isDesktop } = getDevices()
        const topSafeArea = getTelegramTopPaddingValue()
  
        if(!isDesktop) {
          webApp.requestFullscreen();
        }
  
        document.body.style.paddingTop = `${topSafeArea}px`;
      }
    }
    catch(error) {}
  }, [webApp]);

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        {children}
      </SnackbarProvider>
    </Provider>
  );
};