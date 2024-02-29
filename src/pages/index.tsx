import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import Image from "next/image";

export const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold">Bienvenu sur cordée 13</h1>
      <div className="grid h-[1400px] grid-cols-2 py-4 md:py-6 lg:py-8">
        <div></div>
        <div>
          <Image
            src={"/images/moutains_1.webp"}
            alt="landscape moutains"
            width={"512"}
            height={"512"}
            className="aspect-auto overflow-hidden rounded-lg object-cover object-center shadow-sm shadow-black"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
