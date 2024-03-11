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
      <div className="divide-y-1 flex flex-col">
        <div className="flex flex-col gap-4 px-2 pb-4">
          <h2 className="text-2xl font-bold">{"A propos de l'association"}</h2>
          <p className="line-clamp-2 text-justify leading-relaxed xl:line-clamp-4">
            Cordée 13 est une association d’escalade très récente,{" "}
            <span className="font-bold">créée en juillet 2021</span>. Cordée 13
            est très proche de{" "}
            <a
              href={"https://www.grimpe13.org/"}
              target="_blank"
              className="hover:text-burnt-sienna font-bold underline"
            >
              Grimpe13
            </a>{" "}
            qui dispose des créneaux d’occupation du gymnase et nous accompagne
            dans le démarrage de l’activité associative.
          </p>
          <Button
            className="hover:text-burnt-sienna hover:border-burnt-sienna w-32"
            color="primary"
            variant="bordered"
            radius="full"
            onClick={() => router.push("/association")}
          >
            En savoir plus
          </Button>
        </div>
        <div className="flex flex-col gap-4 px-2 pb-4">
          <h2 className="mt-4 text-2xl font-bold">Le mur</h2>
          <p className="line-clamp-2 text-justify leading-relaxed xl:line-clamp-4">
            {"Cordée 13 est occupe le mur d'escalade du gymnase Glacière."}
            <br />
            <span className="font-bold">Adresse : </span>
            <a
              target="_blank"
              className="hover:text-burnt-sienna font-bold underline"
              href="https://www.google.fr/maps/place/Gymnase+Glaci%C3%A8re/@48.8271194,2.3400289,17z/data=!3m2!4b1!5s0x47e67197e68bf33b:0xc540091566f87c3b!4m6!3m5!1s0x47e67197e2384093:0x5a6c1a42695b53db!8m2!3d48.8271194!4d2.3426038!16s%2Fg%2F11f0l1gfrd?entry=ttu"
            >
              Gymnase Glacière - 121 rue de la glacière, 75013 Paris.
            </a>
          </p>
          <Button
            className="hover:text-burnt-sienna hover:border-burnt-sienna w-32"
            color="primary"
            variant="bordered"
            radius="full"
            onClick={() => router.push("/mur")}
          >
            En savoir plus
          </Button>
        </div>
      </div>
      <div className="3xl:h-[700px] relative h-[250px] md:h-[380px] lg:h-[400px] 2xl:h-[430px]">
        <Image
          alt="landscape-standing-climber"
          // className="hidden overflow-hidden object-cover object-center lg:block"
          className="overflow-hidden rounded-md object-cover object-center shadow-lg shadow-black"
          src="/images/penhir-center-1200.webp"
          fill
          priority
        />
        <div className="absolute bottom-1/4 left-0 p-2 lg:top-0 lg:flex lg:flex-col lg:p-4">
          <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
            <TextGenerateEffect words="Cordée 13" />
          </h1>
          <TextGenerateEffect
            words="Association parisienne d'escalade affiliée à la FSGT"
            className="font-bold text-white"
          />
        </div>
      </div>

      <div className="order-first col-span-2 grid min-h-[200px] gap-2 rounded-md p-2 md:order-last md:grid-cols-3 2xl:grid-cols-5 2xl:gap-4">
        <h2 className="pb-2 text-2xl font-bold">Actualités récentes</h2>
        <SimpleCard
          className="border-2"
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
        <SimpleCard
          className="border-2"
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
        <SimpleCard className="border-2">
          <Image
            alt="Card background"
            className="aspect-auto rounded-md object-cover object-center"
            src="/images/landscape-moutains-alpes.webp"
            fill={true}
          />
        </SimpleCard>
        <SimpleCard className="border-2">
          <Image
            alt="Card background"
            className="aspect-auto rounded-md object-cover object-center"
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
