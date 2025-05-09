import { useEffect, useState } from "react";
import { Telegram as TelegramWebApp } from "@twa-dev/types";

export const useTelegram = () => {
  const [webApp, setWebApp] = useState<TelegramWebApp['WebApp'] | null>(null)

  useEffect(() => {
    const checkReady = () => {
      if(typeof window !== 'undefined' && window.Telegram?.WebApp) {
        setWebApp(window.Telegram.WebApp)
      }
      else {
        setTimeout(checkReady, 100)
      }
    }

    checkReady()
  }, [])

  return { webApp }
};