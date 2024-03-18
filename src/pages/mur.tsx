import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import { Divider } from "@nextui-org/react";
import Chart from "@/components/chart/routes-bar-chart";
import Image from "next/image";
import { api } from "@/utils/api";
import { TabsDemo } from "@/components/animated-tabs";

export const Mur: NextPageWithLayout = () => {
  const stats = api.content.getStatsVoies.useQuery(undefined, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const { data } = stats;
  return (
    <div className="grid gap-2 py-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-[4fr_6fr] xl:gap-12">
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
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">
            Matériel nécessaire pour grimper
          </h2>
          <p className="text-justify leading-relaxed">
            Chaque membre doit être équipé avec son propre matériel, dès son
            inscription à l’association.
          </p>
          <ul className="list-disc pl-6 leading-relaxed">
            <li>
              Un baudrier (les baudriers avec 2 petits pontets reliés par un
              pontet mobile sont beaucoup plus confortables, à porter et en cas
              de chute)
            </li>
            <li>Un descendeur (type reverso)</li>
            <li>Un mousqueton à vis</li>
            <li>Une paire de chaussons confortable (confortable !)</li>
          </ul>
          <p className="text-justify leading-relaxed">
            L’utilisation de magnésie en poudre n’est pas autorisée.
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-8 pb-4">
        <div className="flex items-baseline gap-2">
          <h2 className="text-lg font-bold">Répartition des voies</h2>
          <p className="text-xs text-muted-foreground">
            (Dernière mise à jour le 13/03/2024)
          </p>
        </div>
        <div className="relative h-[250px] md:h-[280px] lg:h-[300px]">
          <Chart data={data} dataKey="nombre" xDataKey="cotation" />
        </div>
        <TabsDemo />
      </section>
    </div>
  );
};

Mur.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Mur;
