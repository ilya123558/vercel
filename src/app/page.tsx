'use client'
import { Loader } from "@/shared/ui/loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import { retrieveRawInitData } from '@telegram-apps/bridge';

const allRoutes = [
  '/upgrade',
  '/tasks',
  '/store',
  '/home',
  '/profile',
  '/rating',
  '/exchange',
];

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    // const prefetchAndRedirect = async () => {
    //   await Promise.all(allRoutes.map((route) => router.prefetch(route)));
    //   router.push('/home');
    // };

    // prefetchAndRedirect();
  }, []);

  return (
    <section className="flex items-center justify-center h-full">
      <Loader />
    </section>
  );
}