'use client'
import { store } from "@/views/store";
import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';
import { usePathname } from "next/navigation";

export const ProviderWrapper = ({children}: PropsWithChildren) => {
  const page = usePathname().split('/')[1]

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
        const isDesktop = typeof navigator !== 'undefined' && navigator.userAgent ? /Windows|Macintosh|Linux/i.test(navigator.userAgent) : false;

        if(!isDesktop) {
          // @ts-ignore
          tg.requestFullscreen();
        }

        const topSafeArea = isAndroid ? 85 : 95;
        document.body.style.marginTop = `${!isDesktop ? topSafeArea : 20}px`;

        clearInterval(checkTelegramWebApp);
      }
    }, 100);
  
    return () => clearInterval(checkTelegramWebApp);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (page === 'home') {
      const backgroundUrl = '/images/home/bg.png';

      const img = new Image();
      img.src = backgroundUrl;
      img.onload = () => {
        body.style.backgroundImage = `url(${backgroundUrl})`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
      };
    } else {
      body.style.backgroundImage = '';
    }

    return () => {
      body.style.backgroundImage = '';
    };
  }, [page]);

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        {children}
      </SnackbarProvider>
    </Provider>
  );
};