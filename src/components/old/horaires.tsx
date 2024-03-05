import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import Image from "next/image";
import { SimpleCard } from "@/components/card/simple-card";
import { Divider } from "@nextui-org/divider";

export const Horaires: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-3">
      <div className="flex justify-center">
        <div className="mb-8 flex w-fit items-center gap-4">
          <h1 className="text-6xl font-extrabold">Cordée 13</h1>
          <Divider orientation="vertical" />
          <p>{"Association parisienne d'escalade affiliée à la FSGT"}</p>
        </div>
      </div>

      <div className="flex h-[340px] gap-4">
        <div className="relative basis-1/3">
          <Image
            alt="hanging-man"
            className="aspect-auto overflow-hidden rounded-sm object-cover object-center shadow-md shadow-black"
            src="/images/realistic-climber-sunny.webp"
            fill={true}
          />
        </div>
        <div className="basis-2/3">
          <h1 className="mb-4 text-xl font-bold">
            {"A propos de l'association"}
          </h1>
          <Divider />
          <div className="flex flex-col gap-4 py-2">
            <p className="text-justify text-sm leading-relaxed">
              Cordée 13 est une association d’escalade très récente, créée en
              juillet 2021. Cordée 13 est très proche de Grimpe13 qui dispose
              des créneaux d’occupation du gymnase et nous accompagne dans le
              démarrage de l’activité associative.
            </p>
            <p className="text-justify text-sm leading-relaxed">
              Cordée 13 est affiliée à la FSGT et fait partie du comité de
              Paris. La FSGT, fédération omnisports, a une longue et belle
              histoire, mais aussi un présent dynamique et joyeux avec ses 270
              000 adhérents.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-[340px] gap-4">
        <div className="basis-2/3">01</div>
        <div className="relative basis-1/3">
          <Image
            alt="hanging-man"
            className="aspect-auto overflow-hidden rounded-sm object-cover object-center shadow-md shadow-black"
            src="/images/realistic-landscape-moutains.webp"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

Horaires.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Horaires;
