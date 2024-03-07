import LandingLayout from "@/layouts/landing-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/router";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SimpleCard } from "@/components/card/simple-card";

export const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <>
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">{"A propos de l'association"}</h2>
        <div className="flex flex-col gap-4 py-2">
          <p className="text-justify text-sm leading-relaxed">
            Cordée 13 est une association d’escalade très récente,{" "}
            <span className="font-bold">créée en juillet 2021</span>. Cordée 13
            est très proche de{" "}
            <a
              href={"https://www.grimpe13.org/"}
              target="_blank"
              className="font-bold underline"
            >
              Grimpe13
            </a>{" "}
            qui dispose des créneaux d’occupation du gymnase et nous accompagne
            dans le démarrage de l’activité associative.
          </p>
          <p className="hidden text-justify text-sm leading-relaxed lg:block">
            Cordée 13 est affiliée à{" "}
            <a
              href={"https://www.fsgt.org/"}
              target="_blank"
              className="font-bold underline"
            >
              la FSGT
            </a>{" "}
            et fait partie du comité de Paris.{" "}
            <a
              href={"https://www.fsgt.org/"}
              target="_blank"
              className="font-bold underline"
            >
              La FSGT
            </a>
            , fédération omnisports, à une longue et belle histoire, mais aussi
            un présent dynamique et joyeux avec ses 270 000 adhérents.
          </p>
        </div>
        <Button
          className="w-32"
          onClick={() => router.push("/association")}
          color="primary"
          radius="full"
        >
          En savoir plus
        </Button>
      </section>
      <div className="relative h-[280px] md:h-[320px] xl:h-[400px]">
        <Image
          alt="landscape-standing-climber"
          className="aspect-auto overflow-hidden rounded-md object-cover object-center shadow-lg shadow-black"
          src="/images/landscape-standing-climber-2-mirror.webp"
          fill
        />
        <div className="absolute left-0 top-0 p-2 lg:flex lg:flex-col lg:p-4">
          <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
            <TextGenerateEffect words="Cordée 13" />
          </h1>
          <TextGenerateEffect
            words="Association parisienne d'escalade affiliée à la FSGT"
            className="font-bold text-white"
          />
        </div>
      </div>
      <div className="relative min-h-[300px]">
        <Image
          alt="landscape-standing-climber"
          className="aspect-auto overflow-hidden rounded-md object-cover object-center shadow-lg shadow-black"
          src="/images/realistic-climber-sunny.webp"
          fill
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="flex flex-col">
          <h2 className="mb-4 text-xl font-bold">Le mur</h2>
          <div className="flex h-full flex-col justify-between gap-4 py-2">
            <p className="space-y-4 text-justify text-sm leading-relaxed">
              {"Cordée 13 est occupe le mur d'escalade du gymnase Glacière."}
              <br />
              <span className="underline">Adresse :</span>
              <br />
              Gymnase Glacière - 121 rue de la glacière, 75013 Paris.
            </p>
            <Button
              className="w-32"
              onClick={() => router.push("/mur")}
              color="primary"
              radius="full"
            >
              En savoir plus
            </Button>
          </div>
        </div>
        <SimpleCard
          className="border-2 bg-transparent shadow-none"
          content={{
            category: "Inscription",
            date: "09/09/2023",
            description: "Saison 2023/2024",
          }}
        >
          <p className="text-justify text-sm">
            Les inscriptions adultes ont débuté. Les tirage au sort sera
            effectué...
          </p>
        </SimpleCard>
        <SimpleCard className="border-2 bg-transparent shadow-none">
          <Image
            alt="Card background"
            className="rounded-xl object-cover p-2"
            src="/images/landscape-moutains-alpes.webp"
            fill={true}
          />
        </SimpleCard>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
