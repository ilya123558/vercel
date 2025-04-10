'use client'
import { Loader } from "@/shared/ui/loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { retrieveLaunchParams } from '@telegram-apps/bridge';
import { useLoginByInitDataMutation } from "@/entities/users/api/users.api";
import { setUser, useAppDispatch } from "@/views/store";

export default function Page() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [ loginByInitData, {data: user, isSuccess} ] = useLoginByInitDataMutation()

  useEffect(() => {
    try {
      const launchParams = retrieveLaunchParams();
  
      // Проверка на наличие параметров и данных пользователя
      if (launchParams?.tgWebAppData?.user) {
        const data_init = JSON.stringify(launchParams.tgWebAppData.user);
  
        // Если данные присутствуют, выполняем запрос
        if (data_init) {
          loginByInitData({ data_init })
            .unwrap()  // Если используешь RTK Query с unwrap для получения данных напрямую
            .then((response) => {
              console.log("User data successfully sent:", response);
            })
            .catch((error) => {
              console.error("Error during login:", error);
            });
        } else {
          console.error("User data not found in launchParams.");
        }
      } else {
        console.error("Telegram WebApp data or user not found in launchParams.");
      }
    } catch (error) {
      console.error("Error retrieving launch parameters:", error);
    }
  }, []);
  

  useEffect(() => {
    if(user && isSuccess) {
      dispatch(setUser(user))
      router.push('/home')
    }
  }, [user, isSuccess])

  return (
    <section className="flex items-center justify-center h-full">
      <Loader />
    </section>
  );
}