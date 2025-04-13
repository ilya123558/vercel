'use client'
import { Loader } from "@/shared/ui/loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setUser, useAppDispatch } from "@/views/store";
import { LoginApiClient } from "@/entities/users/api/login.api";

export default function Page() {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async() => {
      const data = await new LoginApiClient().loginByInitData()
      dispatch(setUser(data.user))
      router.push('/home')
    })()

  }, []);

  return (
    <section className="flex items-center justify-center h-full">
      <Loader />
    </section>
  );
}