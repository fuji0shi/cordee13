import LandingLayout from "@/layouts/landing-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/router";
import { lastNews } from "@/config/content";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-4">
        <section className="flex flex-col rounded-md p-4 shadow-md shadow-black">
          <h2 className="mx-auto mb-4 text-xl font-bold">
            {"A propos de l'association"}
          </h2>
          <div className="flex h-full flex-col justify-between gap-4 py-2">
            <p className="text-justify text-sm leading-relaxed">
              Cordée 13 est une association d’escalade très récente,{" "}
              <span className="font-bold">créée en juillet 2021</span>. Cordée
              13 est très proche de Grimpe13 qui dispose des créneaux
              d’occupation du gymnase et nous accompagne dans le démarrage de
              l’activité associative.
            </p>
            <p className="text-justify text-sm leading-relaxed">
              Cordée 13 est affiliée à{" "}
              <a
                href={"https://www.fsgt.org/"}
                target="_blank"
                className="text-burnt-sienna font-bold underline"
              >
                la FSGT
              </a>{" "}
              et fait partie du comité de Paris.{" "}
              <a
                href={"https://www.fsgt.org/"}
                target="_blank"
                className="text-burnt-sienna font-bold underline"
              >
                La FSGT
              </a>
              , fédération omnisports, à une longue et belle histoire, mais
              aussi un présent dynamique et joyeux avec ses 270 000 adhérents.
            </p>
            <Button
              className="w-32"
              onClick={() => router.push("/association")}
              color="primary"
              radius="full"
            >
              En savoir plus
            </Button>
          </div>
        </section>
        <section className="flex grow flex-col gap-4 rounded-md p-4 shadow-md shadow-black">
          <h2 className="mx-auto text-xl font-bold">
            Les dernières actualités du club
          </h2>
          <div className="dark:bg-grid-white/[0.05] relative flex grow flex-col items-center justify-center overflow-hidden rounded-md antialiased">
            <InfiniteMovingCards
              items={lastNews}
              direction="right"
              speed="slow"
            />
          </div>
        </section>
      </div>
      <div className="relative h-[400px] py-4 md:h-[500px] md:py-6 lg:h-[750px] lg:py-12">
        <Image
          alt="climber_sunny"
          className="aspect-auto overflow-hidden rounded-md object-cover object-center shadow-md shadow-black"
          src="/images/realistic-climber-sunny.webp"
          fill
        />
        <div className="absolute bottom-1/3 left-0 p-2 lg:flex lg:flex-col lg:p-5">
          <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
            Cordée 13
          </h1>
          <p className="text-white">
            {"Association parisienne d'escalade affiliée à la FSGT"}
          </p>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
