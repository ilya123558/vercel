'use client'
import { Loader } from "@/shared/ui/loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { retrieveRawInitData } from '@telegram-apps/bridge';
import { useLoginByInitDataMutation } from "@/entities/users/api/users.api";
import { setUser, useAppDispatch } from "@/views/store";

export default function Page() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [ loginByInitData, {data: user, isSuccess} ] = useLoginByInitDataMutation()


  useEffect(() => {
    const data_init = retrieveRawInitData()

    if(data_init) {
      loginByInitData({data_init})
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