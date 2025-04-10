'use client'
import { store } from "@/views/store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

export const ProviderWrapper = ({children}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};