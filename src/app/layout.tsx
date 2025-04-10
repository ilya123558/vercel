import type { Metadata } from "next";
import '@/views/style/global.scss'
import { ProviderWrapper } from "@/shared/ui/wrappers/provider-wrapper/ProviderWrapper";
import Head from "next/head";
import { Menu } from "@/widgets/menu/Menu";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <body className="mt-[12px]">
        <ProviderWrapper>
          {children}
          <Menu />
        </ProviderWrapper>
      </body>
    </html>
  );
}
