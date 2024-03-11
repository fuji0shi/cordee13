import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import { Divider } from "@nextui-org/react";
import Chart from "@/components/chart/routes-bar-chart";
import Image from "next/image";
import { api } from "@/utils/api";

export const Mur: NextPageWithLayout = () => {
  const stats = api.content.getStatsVoies.useQuery();
  const { data } = stats;
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-[6fr_4fr] xl:gap-6">
      <section className="flex flex-col gap-4">
        <div>
          <h1 className="pb-2 text-2xl font-bold">Le mur</h1>
          <Divider />
        </div>
        <p className="text-justify leading-relaxed">
          Le mur du gymnase glacière comporte 19 lignes pour un peu plus de 80
          voies dont les cotations varient du 4c au 7c. Il y 3 lignes en dièdre,
          6 lignes déversantes, 2 lignes de dalle et 8 lignes verticales.
        </p>
        <p className="text-justify leading-relaxed">
          {
            "Les ouvertures de voies sont effectuées par le collectif Mur et ont lieu tout au long de l'année."
          }
        </p>
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold">Répartition des voies</h2>
          <div className="relative h-[250px] md:h-[300px] lg:h-[350px]">
            <Chart data={data} dataKey="nombre" xDataKey="cotation" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold">
            Matériel nécessaire pour grimper
          </h2>
          <p>
            Chaque membre doit être équipé avec son propre matériel, dès son
            inscription à l’association.
          </p>
          <ul>
            <li>
              Un baudrier (les baudriers avec 2 petits pontets reliés par un
              pontet mobile sont beaucoup plus confortables, à porter et en cas
              de chute)
            </li>
            <li>Un descendeur (type reverso)</li>
            <li>Un mousqueton à vis</li>
            <li>Une paire de chaussons confortable (confortable !)</li>
          </ul>
          <p>L’utilisation de magnésie en poudre n’est pas autorisée.</p>
        </div>
      </section>
      <div className="flex flex-col">
        <div>
          <div className="3xl:h-[700px] relative h-[250px] md:h-[380px] lg:h-[400px] 2xl:h-[430px]">
            <Image
              alt="mur-2"
              className="overflow-hidden rounded-md object-cover object-center"
              src="/images/mur-2-800.webp"
              fill
              priority
            />
          </div>
          <div className="flex flex-row-reverse">
            <p className="text-muted-foreground text-sm">Le dévers</p>
          </div>
        </div>
        <div>
          <div className="3xl:h-[700px] relative h-[250px] md:h-[380px] lg:h-[400px] 2xl:h-[430px]">
            <Image
              alt="mur-2"
              className="overflow-hidden rounded-md object-cover object-center"
              src="/images/mur-4-800.webp"
              fill
              priority
            />
          </div>
          <div className="flex flex-row-reverse">
            <p className="text-muted-foreground text-sm">La dalle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Mur.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Mur;
