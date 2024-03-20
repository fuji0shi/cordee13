import LandingLayout from "@/layouts/landing-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/router";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SimpleCard } from "@/components/card/simple-card";
import { api } from "@/utils/api";
import { LoadingDiv } from "@/components/loading/loading-div";
import { Logo } from "@/components/logo/logo-alphabet";

export const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const { data, isLoading, isSuccess } = api.wordpress.getPosts.useQuery();
  console.log(data);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 px-2 ">
          <h2 className="text-2xl font-bold">{"A propos de l'association"}</h2>
          <p className="line-clamp-2 text-justify leading-relaxed xl:line-clamp-4">
            Cordée 13 est une association d’escalade très récente,{" "}
            <span className="font-bold">créée en juillet 2021</span>. Cordée 13
            est très proche de{" "}
            <a
              href={"https://www.grimpe13.org/"}
              target="_blank"
              className="font-bold underline hover:text-burnt-sienna"
            >
              Grimpe13
            </a>{" "}
            qui dispose des créneaux d’occupation du gymnase et nous accompagne
            dans le démarrage de l’activité associative.
          </p>
          <Button
            className="w-32 hover:border-burnt-sienna hover:text-burnt-sienna"
            color="primary"
            variant="bordered"
            radius="full"
            onClick={() => router.push("/association")}
          >
            En savoir plus
          </Button>
        </div>
        <div className="flex flex-col gap-4 px-2">
          <h2 className="mt-4 text-2xl font-bold">Le mur</h2>

          <p className="line-clamp-2 text-justify leading-relaxed xl:line-clamp-4">
            {"Cordée 13 est occupe le mur d'escalade du gymnase Glacière."}
            <br />
            <span className="font-bold">Adresse : </span>
            <a
              target="_blank"
              className="font-bold underline hover:text-burnt-sienna"
              href="https://tinyurl.com/cordee13"
            >
              Gymnase Glacière - 121 rue de la glacière, 75013 Paris.
            </a>
          </p>
          <Button
            className="w-32 hover:border-burnt-sienna hover:text-burnt-sienna"
            color="primary"
            variant="bordered"
            radius="full"
            onClick={() => router.push("/mur")}
          >
            En savoir plus
          </Button>
        </div>
      </div>
      <div className="relative h-[250px] md:h-[360px] lg:h-[320px] 2xl:h-[400px] 3xl:h-[700px]">
        <Image
          alt="landscape-penhir-center"
          className="overflow-hidden rounded-md object-cover object-center"
          //className="overflow-hidden rounded-md object-cover object-center shadow-lg shadow-black"
          src="/images/penhir-center-1200.webp"
          fill
          priority
        />
        <div className="absolute bottom-1/4 left-0 cursor-default p-2 lg:top-0 lg:flex lg:flex-col lg:p-4">
          <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
            <TextGenerateEffect words="Cordée 13" />
          </h1>
          <TextGenerateEffect
            words="Association parisienne d'escalade affiliée à la FSGT"
            className="font-semibold text-white"
          />
        </div>
      </div>

      <div className="order-first col-span-2 grid min-h-[200px] gap-2 rounded-md p-2 md:order-last md:grid-cols-3 2xl:h-1/2 2xl:grid-cols-5 2xl:gap-4">
        <h2 className="pb-2 text-2xl font-bold">Actualités récentes</h2>
        {isLoading && <LoadingDiv />}
        {isSuccess &&
          data.posts?.edges.map((post, index) => {
            let date: string = new Date().toLocaleString();
            let imageUrl;
            if (post.node.date && post.node.featuredImage?.node.sourceUrl) {
              date = new Date(post.node.date).toLocaleString();
              imageUrl = post.node.featuredImage?.node.sourceUrl;
            }

            return (
              <SimpleCard
                className="border-1"
                key={index}
                content={{
                  category: "News",
                  date: date,
                  description: post.node.title,
                }}
              >
                {imageUrl ? (
                  <Image
                    alt="Card background"
                    className="aspect-auto rounded-md object-cover object-center"
                    src={imageUrl}
                    fill={true}
                    sizes="100%"
                  />
                ) : (
                  <div className="grid place-items-center">
                    <Logo className="size-32" />
                  </div>
                )}
              </SimpleCard>
            );
          })}
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
