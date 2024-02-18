import Head from "next/head";
import type { LayoutProps } from "@/types";
//* Types, Interfaces

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>idiLik</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col">{children}</div>
    </>
  );
};

export default Layout;
