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
    const launchParams = retrieveLaunchParams();
    if (launchParams?.tgWebAppData?.user) {
      const init_data = JSON.stringify(launchParams.tgWebAppData.user);
      loginByInitData({ init_data })
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