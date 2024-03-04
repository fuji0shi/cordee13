import Head from "next/head";
import type { LayoutProps } from "@/types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Cordée13</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="flex min-h-screen max-w-[1600px] flex-col px-2 md:px-4 lg:mx-auto">
        {children}
      </div>
    </>
  );
};

export default Layout;
