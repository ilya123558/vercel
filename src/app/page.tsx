'use client'
import { Loader } from "@/shared/ui/loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setUser, useAppDispatch } from "@/views/store";
import { LoginApiClient } from "@/entities/users/api/login.api";
import { useTelegram } from "@/shared/hooks/useTelegram";

export default function Page() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { webApp } = useTelegram()

  useEffect(() => {
    const login = async () => {
      if(!webApp) return
      const init_data = webApp.initData

      try {
        if (init_data) {
          const data = await new LoginApiClient().loginByInitData(init_data);
          dispatch(setUser({
            ...data.user, 
            background: data.user.background ? data.user.background : "/images/home/bg.png"
          }));
          localStorage.setItem('prev-page', '/')
          router.push('/home');

        } else {
          alert("initData не доступно");
        }
      }
      catch (e) {
        alert(JSON.stringify(e));
      }
    };

    login();
  }, [dispatch, router, webApp]);

  return (
    <section className="flex items-center justify-center h-full">
      <Loader />
    </section>
  );
}
