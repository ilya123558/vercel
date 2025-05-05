'use client'
import { store } from "@/views/store";
import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';

export const ProviderWrapper = ({children}: PropsWithChildren) => {
  useEffect(() => {
    const checkTelegramWebApp = setInterval(() => {
      if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        // @ts-ignore
        tg.requestFullscreen();
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