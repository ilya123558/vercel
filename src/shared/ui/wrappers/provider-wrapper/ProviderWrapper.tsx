'use client'
import { store } from "@/views/store";
import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';

export const ProviderWrapper = ({children}: PropsWithChildren) => {
  useEffect(() => {
    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';

    document.head.appendChild(metaViewport);

    return () => {
      document.head.removeChild(metaViewport);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.Telegram) {
      const script = document.createElement('script');
      script.src = "https://telegram.org/js/telegram-web-app.js?57";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const checkTelegramWebApp = setInterval(() => {
      if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;

        const isAndroid = typeof navigator !== 'undefined' && navigator.userAgent ? /Android/i.test(navigator.userAgent) : false;
        const isIos = typeof navigator !== 'undefined' && navigator.userAgent ? /iPhone|iPad|iPod/i.test(navigator.userAgent) : false;
        const isDesktop = isAndroid || isIos ? false : true

        if(!isDesktop) {
          // @ts-ignore
          tg.requestFullscreen();
        }

        const topSafeArea = isAndroid ? 85 : 95;
        document.body.style.marginTop = `${isDesktop ? 20 : topSafeArea}px`;

        clearInterval(checkTelegramWebApp);
      }
    }, 100);
  
    return () => clearInterval(checkTelegramWebApp);
  }, []);

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        {children}
      </SnackbarProvider>
    </Provider>
  );
};