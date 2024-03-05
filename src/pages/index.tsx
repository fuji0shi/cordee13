import LandingLayout from "@/layouts/landing-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Logo } from "@/components/logo/logo-minimalist";
import { Divider, Button } from "@nextui-org/react";

export const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid min-h-[300px] gap-4 lg:flex lg:min-h-[500px]">
        <div className="flex flex-col px-2 lg:w-3/5 lg:gap-4">
          <div className="grid h-1/2 gap-6 bg-red-500 lg:grid-cols-2">
            <div className=" flex h-full flex-col p-2">
              <h1 className="mb-4 text-xl font-bold">
                {"A propos de l'association"}
              </h1>
              <Divider />
              <div className="flex h-full flex-col justify-between gap-4 py-2">
                <p className="line-clamp-4 text-justify text-sm leading-relaxed">
                  Cordée 13 est une association d’escalade très récente, créée
                  en juillet 2021. Cordée 13 est très proche de Grimpe13 qui
                  dispose des créneaux d’occupation du gymnase et nous
                  accompagne dans le démarrage de l’activité associative.
                </p>
                <Button
                  variant="solid"
                  className="bg-lapis-lazuli text-white lg:w-1/2"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className=" flex h-full flex-col  p-2">
              <h1 className="mb-4 text-xl font-bold">{"Le mur"}</h1>
              <Divider />
              <div className="flex h-full flex-col justify-between gap-4 py-2">
                <p className="line-clamp-4 text-justify text-sm leading-relaxed">
                  {
                    "Cordée 13 est occupe le mur d'escalalde du gymnase Glacière."
                  }
                </p>
                <Button
                  variant="solid"
                  className="bg-lapis-lazuli text-white lg:w-1/2"
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
          <div className="grid h-1/2 gap-6 bg-blue-500 lg:grid-cols-2">01</div>
        </div>
        <div className="relative flex lg:w-2/5">
          <Image
            alt="hanging-man"
            className="aspect-auto overflow-hidden rounded-sm object-cover object-center shadow-md shadow-black"
            src="/images/realistic-climber-sunny.webp"
            fill={true}
          />
          <div className="absolute bottom-1/3 left-0 hidden p-2 lg:flex lg:flex-col lg:p-5">
            <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
              Cordée 13
            </h1>
            <p className="text-white">
              {"Association parisienne d'escalade affiliée à la FSGT"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
