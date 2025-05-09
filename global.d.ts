import { Telegram as TelegramWebApp } from "@twa-dev/types";

declare global {
  interface Window {
    Telegram: TelegramWebApp;
  }
}

export {};