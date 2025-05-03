'use client'
import { Loader } from "@/shared/ui/loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { setUser, useAppDispatch } from "@/views/store";
import { LoginApiClient } from "@/entities/users/api/login.api";
import { useCheckServerIsWorkQuery } from "@/entities/health/api/health.api";
import { retrieveRawInitData } from '@telegram-apps/sdk';

export default function Page() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  // useCheckServerIsWorkQuery()

  useEffect(() => {
    const login = async () => {
      const init_data = retrieveRawInitData()
      try {
        if (init_data) {
          const data = await new LoginApiClient().loginByInitData(init_data);
          dispatch(setUser(data.user));
          router.push('/home');
        } else {
          alert("initData не доступно");
        }
      }
      catch (e) {
        alert(JSON.stringify(e))
      }
    };

    login();
  }, [dispatch, router]);

  return (
    <section className="flex items-center justify-center h-full">
      <Loader />
    </section>
  );
}