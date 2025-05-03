'use client'
import { store } from "@/views/store";
import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';
import { viewport } from '@telegram-apps/sdk';

export const ProviderWrapper = ({children}: PropsWithChildren) => {
  useEffect(() => {
    if (viewport.expand.isAvailable()) {
      viewport.expand();
    }
  }, []);

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        {children}
      </SnackbarProvider>
    </Provider>
  );
};