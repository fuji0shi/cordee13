import HomeLayout from "@/layouts/home-layout";
import Image from "next/image";
import type { NextPageWithLayout } from "@/pages/_app";
import { Button } from "@nextui-org/button";

export const Actualites: NextPageWithLayout = () => {
  return (
    <div className="grid grow xl:grid-cols-4">
      <div className="border-1 grid p-1 md:col-span-3 lg:grid-cols-2 lg:p-2">
        {/* <div>
          <h2 className="text-xl">A propos de Cordée 13</h2>
          <p className="text-justify text-sm leading-relaxed">
            Cordée 13 est une association d’escalade très récente, créée en
            juillet 2021. Cordée 13 est très proche de Grimpe13 qui dispose des
            créneaux d’occupation du gymnase et nous accompagne dans le
            démarrage de l’activité associative.
          </p>
          <p className="text-justify text-sm leading-relaxed">
            Cordée 13 est affiliée à la FSGT et fait partie du comité de Paris.
            La FSGT, fédération omnisports, a une longue et belle histoire, mais
            aussi un présent dynamique et joyeux avec ses 270 000 adhérents.
          </p>
          <Button color="primary" radius="full" size="sm" className="w-32">
            En savoir plus
          </Button>
        </div> */}
      </div>
      <div className="lg:border-y-1 lg:border-r-1 relative p-1 md:col-span-1 lg:p-2">
        <Image
          alt="climber_sunny"
          className="aspect-auto overflow-hidden object-cover object-center"
          src="/images/realistic-climber-sunny.webp"
          fill
        />
        <div className="absolute bottom-1/4 left-0 p-2 lg:flex lg:flex-col lg:p-5">
          <h1 className="border-b-1 border-white text-5xl font-extrabold text-white">
            Cordée 13
          </h1>
          <p className="text-lg text-white">
            {"Association parisienne d'escalade affiliée à la FSGT"}
          </p>
        </div>
      </div>
      <div className="lg:border-x-1 lg:border-b-1 relative p-1 md:col-span-2 lg:p-2">
        <Image
          alt="climber_sunny"
          className="aspect-auto overflow-hidden object-cover object-center"
          src="/images/realistic-landscape-moutains.webp"
          fill
        />
      </div>
      <div className="lg:border-b-1 lg:border-r-1  flex flex-col p-1 md:col-span-1 lg:p-2">
        <h2 className="text-xl">Dernières actualités</h2>
      </div>
      <div className="lg:border-b-1 border-r-1 flex flex-col p-1 md:col-span-1 lg:p-2">
        <h2 className="text-xl">Dernières sorties du club</h2>
      </div>
    </div>
  );
};

Actualites.getLayout = function getLayout(page: React.ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Actualites;
