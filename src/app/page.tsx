'use client'
import { Loader } from "@/shared/ui/loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLoginByInitDataMutation } from "@/entities/users/api/users.api";
import { setUser, useAppDispatch } from "@/views/store";

export default function Page() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [ loginByInitData, {data: user, isSuccess} ] = useLoginByInitDataMutation()

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
      const data_init = window.Telegram.WebApp.initData;
  
      if (data_init) {
        loginByInitData({ data_init });
      }
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