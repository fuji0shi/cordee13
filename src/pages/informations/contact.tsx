import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import Image from "next/image";

export const Contact: NextPageWithLayout = () => {
  return (
    <div className="grid-rows-6r grid h-[800px] grid-cols-4 gap-3">
      <div className="col-span-3 row-span-3">
        <div className="grid gap-4 p-2 md:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="mb-4 text-xl font-bold">A propos de Cordée 13</h1>
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
              <p className="text-justify text-sm leading-relaxed">
                Cordée 13 se veut une association de quartier, acteur de la vie
                locale, en lien avec la mairie de l’arrondissement qui gère le
                gymnase que nous occupons. L’escalade au gymnase, une activité
                parfaite pour découvrir l’autogestion en s’investissant, car
                Cordée 13 ne repose que sur le bénévolat de ses membres.{" "}
              </p>
              <p className="text-justify text-sm leading-relaxed">
                La dimension sociale, amicale, chaleureuse des relations est au
                cœur du projet de l’association ! L’escalade est le moyen de
                nous rencontrer, de partager et de transmettre. Association
                d’éducation populaire, Cordée13 souhaite accueillir tout le
                monde, du plus jeune au plus âgé, du plus aisé au moins
                favorisé. Un système fondé sur la confiance permet à chacun de
                payer moins par nécessité ou de payer plus par solidarité.
              </p>
            </div>
          </div>
          <div className="bg-pink-500">02</div>
        </div>
      </div>
      <div className="relative col-span-1 row-span-3">
        <Image
          alt="hanging-man"
          className="aspect-auto overflow-hidden rounded-sm object-cover object-center shadow-md shadow-black"
          src="/images/vector-hanging-man.webp"
          fill={true}
        />
      </div>
      <div className="relative col-span-2 row-span-3">
        <Image
          alt="landscape-moutains"
          className="aspect-auto overflow-hidden rounded-sm object-cover object-center shadow-md shadow-black"
          src="/images/vector-landscape-moutains.webp"
          fill={true}
        />
      </div>
      <div className="bg- col-span-1 row-span-1">04</div>
      <div className="col-span-1 row-span-1">05</div>
      <div className="col-span-2 row-span-2">06</div>
    </div>
  );
};

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Contact;
