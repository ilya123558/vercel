'use client'
import { store } from "@/views/store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';

export const ProviderWrapper = ({children}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        {children}
      </SnackbarProvider>
    </Provider>
  );
};