import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import { SimpleCard } from "@/components/card/simple-card";

export const Home: NextPageWithLayout = () => {
  return (
    <div className="flex h-screen flex-col gap-6">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-6xl font-extrabold">Cordée 13</h1>
          <Divider orientation="vertical" />
          <p>{"Association parisienne d'escalade affiliée à la FSGT"}</p>
        </div>
        <blockquote className="my-4 rounded-sm border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
          <p className="font-medium italic leading-relaxed text-gray-900 dark:text-white">
            &quot;L’escalade est le moyen de nous rencontrer, de partager et de
            transmettre.&quot;
          </p>
        </blockquote>
      </div>
      <div className="hidden gap-8 lg:grid lg:grid-cols-2">
        <h2 className="text-lg font-bold">Les dernières sorties</h2>
        <h2 className="text-lg font-bold">Les actualités du club</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-2 md:grid-cols-3">
          <SimpleCard className="border-2 bg-transparent shadow-none">
            <Image
              alt="Card background"
              className="rounded-xl object-cover p-2"
              src="/images/landscape-moutains-alpes.webp"
              fill={true}
            />
          </SimpleCard>
          <SimpleCard className="border-2 bg-transparent shadow-none">
            <Image
              alt="Card background"
              className="rounded-xl object-cover p-2"
              src="/images/landscape-moutains-alpes.webp"
              fill={true}
            />
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
        <div className="grid gap-2 md:grid-cols-3">
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
          <SimpleCard className="border-2 bg-transparent shadow-none" />
          <SimpleCard className="border-2 bg-transparent shadow-none" />
        </div>
      </div>
      <div className="grid h-[300px] bg-teal-500 lg:grid-cols-2">
        <div>01</div>
        <div>02</div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

// <div className="flex justify-center">
//   <div className="mb-8 flex w-fit items-center gap-4">
//     <h1 className="text-6xl font-extrabold">Cordée 13</h1>
//     <Divider orientation="vertical" />
//     <p>{"Association parisienne d'escalade affiliée à la FSGT"}</p>
//   </div>
// </div>

// <div className="flex h-[340px] gap-4">
//   <div className="relative basis-1/3">
//     <Image
//       alt="hanging-man"
//       className="aspect-auto overflow-hidden rounded-sm object-cover object-center shadow-md shadow-black"
//       src="/images/realistic-climber-sunny.webp"
//       fill={true}
//     />
//   </div>
//   <div className="basis-2/3">
// <h1 className="mb-4 text-xl font-bold">
//   {"A propos de l'association"}
// </h1>
// <Divider />
// <div className="flex flex-col gap-4 py-2">
//   <p className="text-justify text-sm leading-relaxed">
//     Cordée 13 est une association d’escalade très récente, créée en
//     juillet 2021. Cordée 13 est très proche de Grimpe13 qui dispose
//     des créneaux d’occupation du gymnase et nous accompagne dans le
//     démarrage de l’activité associative.
//   </p>
//   <p className="text-justify text-sm leading-relaxed">
//     Cordée 13 est affiliée à la FSGT et fait partie du comité de
//     Paris. La FSGT, fédération omnisports, a une longue et belle
//     histoire, mais aussi un présent dynamique et joyeux avec ses 270
//     000 adhérents.
//   </p>
//     </div>
//   </div>
// </div>
// <div className="flex h-[340px] gap-4">
//   <div className="basis-2/3">01</div>
//   <div className="relative basis-1/3">
//     <Image
//       alt="hanging-man"
//       className="aspect-auto overflow-hidden rounded-sm object-cover object-center shadow-md shadow-black"
//       src="/images/realistic-landscape-moutains.webp"
//       fill={true}
//     />
//   </div>
// </div>
// <div className="absolute bottom-0 left-0 p-2 lg:bottom-[300px] lg:left-10 lg:p-5">
//   <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
//     Cordée 13
//   </h1>
//   {/* <Divider /> */}
//   <p className="text-white">
//     {"Association parisienne d'escalade affiliée à la FSGT"}
//   </p>
// </div>

// <div className="flex flex-col bg-red-800">
//   <div className="grid gap-4 lg:flex">
//     <div className="flex flex-col gap-2 lg:w-3/5 lg:gap-4">
//       <div className="relative h-full w-full lg:hidden">
//         <Image
//           alt="climber-sunny"
//           className="aspect-auto overflow-hidden rounded-sm object-cover object-center shadow-md shadow-black"
//           src="/images/realistic-climber-sunny.webp"
//           fill={true}
//         />
//         <div className="absolute bottom-1/3 left-0 p-2 lg:flex lg:flex-col lg:p-5">
//           <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
//             Cordée 13
//           </h1>
//           <p className="text-white">
//             {"Association parisienne d'escalade affiliée à la FSGT"}
//           </p>
//         </div>
//       </div>
//       <div className="grid h-1/2 gap-6 lg:grid-cols-2">
//         <div className="flex h-full flex-col p-2">
//           <h2 className="mb-4 text-xl font-bold">
//             {"A propos de l'association"}
//           </h2>
//           <div className="flex h-full flex-col justify-between gap-4 py-2">
//             <p className="line-clamp-4 text-justify text-sm leading-relaxed">
//               {
//                 "Cordée 13 est une association d’escalade très récente, créée en juillet 2021. Cordée 13 est très proche de Grimpe13 qui dispose des créneaux d’occupation du gymnase et nous accompagne dans le démarrage de l’activité associative."
//               }
//             </p>
//             <Button
//               className="w-32"
//               onClick={() => router.push("/association")}
//               size="sm"
//             >
//               En savoir plus
//             </Button>
//           </div>
//         </div>
//         <div className="flex h-full flex-col p-2">
//           <h2 className="mb-4 text-xl font-bold">Le mur</h2>
//           <div className="flex h-full flex-col justify-between gap-4 py-2">
//             <p className="line-clamp-4 space-y-4 text-justify text-sm leading-relaxed">
//               {
//                 "Cordée 13 est occupe le mur d'escalade du gymnase Glacière."
//               }
//               <br />
//               <span className="underline">Adresse :</span>
//               <br />
//               Gymnase Glacière - 121 rue de la glacière, 75013 Paris.
//             </p>
//             <Button
//               className="w-32"
//               onClick={() => router.push("/mur")}
//               size="sm"
//             >
//               En savoir plus
//             </Button>
//           </div>
//         </div>
//         <Divider className="col-span-2" />
//         <div className="col-span-2 flex h-[260px] flex-col gap-4 p-2">
//           <h2 className="text-xl font-bold">
//             Dernières actualités du club
//           </h2>
//           <div className="grid gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-4 xl:gap-6">
//             <SimpleCard
//               className="border-2 bg-transparent shadow-none"
//               content={{
//                 category: "Inscription",
//                 date: "09/09/2023",
//                 description: "Saison 2023/2024",
//               }}
//             >
//               <p className="text-justify text-sm">
//                 Les inscriptions adultes ont débuté. Les tirage au sort sera
//                 effectué...
//               </p>
//             </SimpleCard>
//             <SimpleCard className="border-2 bg-transparent shadow-none">
//               <Image
//                 alt="Card background"
//                 className="rounded-xl object-cover p-2"
//                 src="/images/landscape-moutains-alpes.webp"
//                 fill={true}
//               />
//             </SimpleCard>
//             <SimpleCard className="border-2 bg-transparent shadow-none" />
//             <SimpleCard className="border-2 bg-transparent shadow-none" />
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="relative lg:flex lg:w-2/5">
//       <Image
//         alt="climber-sunny"
//         className="aspect-auto overflow-hidden rounded-md object-cover object-center shadow-md shadow-black"
//         src="/images/realistic-climber-sunny.webp"
//         fill={true}
//       />
//       <div className="absolute bottom-1/3 left-0 hidden p-2 lg:flex lg:flex-col lg:p-5">
//         <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
//           Cordée 13
//         </h1>
//         <p className="text-white">
//           {"Association parisienne d'escalade affiliée à la FSGT"}
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

// import SimpleNavbar from "@/components/navbar/simple-navbar";
// import BaseLayout from "@/layouts/base-layout";
// import type { LayoutProps } from "@/types";
// import { Footer } from "@/components/footer/footer";

// export const LandingLayout = ({ children }: LayoutProps) => {
//   return (
//     <BaseLayout>
//       <header className="sticky top-0 z-10 flex w-full items-center px-2 backdrop-blur-lg md:px-6 lg:px-20">
//         <SimpleNavbar />
//       </header>
//       <main className="flex flex-col gap-4 px-2 py-12 md:grid md:px-6 lg:grid-cols-[5fr_4fr] lg:px-20">
//         {children}
//       </main>
//       <div className="px-2 md:px-6 lg:px-20">
//         <Footer />
//       </div>
//     </BaseLayout>
//   );
// };

// export default LandingLayout;

// <>
//   <div className="flex flex-col gap-4">
//     <div className="grid gap-4 lg:grid-cols-2">
//       <section className="flex flex-col p-4">
//         <h2 className="mb-4 text-xl font-bold">
//           {"A propos de l'association"}
//         </h2>
//         <div className="flex h-full flex-col justify-between gap-4 py-2">
//           <p className="text-justify text-sm leading-relaxed">
//             Cordée 13 est une association d’escalade très récente,{" "}
//             <span className="font-bold">créée en juillet 2021</span>. Cordée
//             13 est très proche de{" "}
//             <a
//               href={"https://www.grimpe13.org/"}
//               target="_blank"
//               className="font-bold underline"
//             >
//               Grimpe13
//             </a>{" "}
//             qui dispose des créneaux d’occupation du gymnase et nous
//             accompagne dans le démarrage de l’activité associative.
//           </p>
//           <p className="text-justify text-sm leading-relaxed">
//             Cordée 13 est affiliée à{" "}
//             <a
//               href={"https://www.fsgt.org/"}
//               target="_blank"
//               className="font-bold underline"
//             >
//               la FSGT
//             </a>{" "}
//             et fait partie du comité de Paris.{" "}
//             <a
//               href={"https://www.fsgt.org/"}
//               target="_blank"
//               className="font-bold underline"
//             >
//               La FSGT
//             </a>
//             , fédération omnisports, à une longue et belle histoire, mais
//             aussi un présent dynamique et joyeux avec ses 270 000 adhérents.
//           </p>
//           <Button
//             className="w-32"
//             onClick={() => router.push("/association")}
//             color="primary"
//             radius="full"
//           >
//             En savoir plus
//           </Button>
//         </div>
//       </section>
//       <section className="flex flex-col p-4">
//         <h2 className="mb-4 text-xl font-bold">Le mur</h2>
//         <div className="flex h-full flex-col justify-between gap-4 py-2">
//           <p className="line-clamp-4 space-y-4 text-justify text-sm leading-relaxed">
//             {
//               "Cordée 13 est occupe le mur d'escalade du gymnase Glacière. Il est haut de 9m est dispose de 19 voies."
//             }
//             <br />
//             <span className="underline">Adresse :</span>
//             <br />
//             Gymnase Glacière - 121 rue de la glacière, 75013 Paris.
//           </p>
//           <Button
//             className="w-32"
//             onClick={() => router.push("/mur")}
//             radius="full"
//             color="primary"
//           >
//             En savoir plus
//           </Button>
//         </div>
//       </section>
//     </div>
//     <section className="flex grow flex-col gap-4 rounded-md p-4">
//       {/* <h2 className="mx-auto text-xl font-bold">
//         Les dernières actualités du club
//       </h2>
//       <div className="dark:bg-grid-white/[0.05] relative flex grow flex-col items-center justify-center overflow-hidden rounded-md antialiased">
//         <InfiniteMovingCards
//           items={lastNews}
//           direction="right"
//           speed="slow"
//         />
//       </div> */}
//     </section>
//   </div>
//   <div className="relative h-[400px] py-4 md:h-[500px] md:py-6 lg:h-[750px] lg:py-12">
//     <Image
//       alt="climber_sunny"
//       className="aspect-auto overflow-hidden rounded-md object-cover object-center"
//       src="/images/realistic-climber-sunny.webp"
//       fill
//     />
//     <div className="absolute bottom-1/3 left-0 p-2 lg:flex lg:flex-col lg:p-5">
//       <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
//         <TextGenerateEffect words={"Cordée 13"} />
//       </h1>
//       <p className="text-white">
//         {"Association parisienne d'escalade affiliée à la FSGT"}
//       </p>
//     </div>
//   </div>
// </>

// <div className="flex flex-col gap-6 py-2 md:py-12 lg:py-20">
//   <div className="grid gap-4 lg:grid-cols-4">
//     <section className="flex flex-col">
//       <h2 className="mb-4 text-xl font-bold">
//         {"A propos de l'association"}
//       </h2>
//       <div className="flex h-full flex-col gap-4 py-2">
//         <p className="text-justify text-sm leading-relaxed">
//           Cordée 13 est une association d’escalade très récente,{" "}
//           <span className="font-bold">créée en juillet 2021</span>. Cordée
//           13 est très proche de{" "}
//           <a
//             href={"https://www.grimpe13.org/"}
//             target="_blank"
//             className="font-bold underline"
//           >
//             Grimpe13
//           </a>{" "}
//           qui dispose des créneaux d’occupation du gymnase et nous
//           accompagne dans le démarrage de l’activité associative.
//         </p>
//         <p className="text-justify text-sm leading-relaxed">
//           Cordée 13 est affiliée à{" "}
//           <a
//             href={"https://www.fsgt.org/"}
//             target="_blank"
//             className="font-bold underline"
//           >
//             la FSGT
//           </a>{" "}
//           et fait partie du comité de Paris.{" "}
//           <a
//             href={"https://www.fsgt.org/"}
//             target="_blank"
//             className="font-bold underline"
//           >
//             La FSGT
//           </a>
//           , fédération omnisports, à une longue et belle histoire, mais
//           aussi un présent dynamique et joyeux avec ses 270 000 adhérents.
//         </p>
//         <Button
//           className="w-32"
//           onClick={() => router.push("/association")}
//           color="primary"
//           radius="full"
//         >
//           En savoir plus
//         </Button>
//       </div>
//     </section>
//     <section className="flex flex-col">
//       <h2 className="mb-4 text-xl font-bold">Le mur</h2>
//       <div className="flex h-full flex-col gap-4 py-2">
//         <p className="line-clamp-4 space-y-4 text-justify text-sm leading-relaxed">
//           {
//             "Cordée 13 est occupe le mur d'escalade du gymnase Glacière. Il est haut de 9m est dispose de 19 voies."
//           }
//           <br />
//           <span className="underline">Adresse :</span>
//           <br />
//           Gymnase Glacière - 121 rue de la glacière, 75013 Paris.
//         </p>
//         <Button
//           className="w-32"
//           onClick={() => router.push("/mur")}
//           radius="full"
//           color="primary"
//         >
//           En savoir plus
//         </Button>
//       </div>
//     </section>

//     <div className="relative h-[280px] lg:col-span-2 lg:h-[400px]">
//       <Image
//         alt="Card background"
//         className="aspect-auto overflow-hidden rounded-md object-cover object-center shadow-md shadow-black"
//         src="/images/landscape-standing-climber-2-mirror.webp"
//         fill
//       />
//       <div className="absolute left-0 top-0 p-1 lg:flex lg:flex-col lg:p-3">
//         <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
//           <TextGenerateEffect words={"Cordée 13"} />
//         </h1>
//         <TextGenerateEffect
//           className="font-bold text-white"
//           words="Association parisienne d'escalade affiliée à la FSGT"
//         />
//       </div>
//     </div>
//   </div>
// </div>

// <section className="bg-muted flex flex-col gap-2 rounded-md p-4">
//   <div className="flex h-1/2 flex-col justify-between">
//     <div>
//       <h2 className="text-xl font-bold">{"A propos de l'association"}</h2>
//       <p className="line-clamp-2 text-justify text-sm leading-relaxed xl:line-clamp-4">
//         Cordée 13 est une association d’escalade très récente,{" "}
//         <span className="font-bold">créée en juillet 2021</span>. Cordée
//         13 est très proche de{" "}
//         <a
//           href={"https://www.grimpe13.org/"}
//           target="_blank"
//           className="hover:text-burnt-sienna font-bold underline"
//         >
//           Grimpe13
//         </a>{" "}
//         qui dispose des créneaux d’occupation du gymnase et nous
//         accompagne dans le démarrage de l’activité associative.
//       </p>
//     </div>
//     <Button
//       className="w-32"
//       onClick={() => router.push("/association")}
//       color="primary"
//       radius="full"
//     >
//       En savoir plus
//     </Button>
//   </div>

//   <div className="flex h-1/2 flex-col justify-between">
//     <div>
//       <h2 className="text-xl font-bold">Le mur</h2>
//       <p className="line-clamp-2 text-justify text-sm leading-relaxed xl:line-clamp-4">
//         {"Cordée 13 est occupe le mur d'escalade du gymnase Glacière."}
//         <br />
//         <span className="font-bold">Adresse : </span>
//         <a
//           target="_blank"
//           className="hover:text-burnt-sienna font-bold underline"
//           href="https://www.google.fr/maps/place/Gymnase+Glaci%C3%A8re/@48.8271194,2.3400289,17z/data=!3m2!4b1!5s0x47e67197e68bf33b:0xc540091566f87c3b!4m6!3m5!1s0x47e67197e2384093:0x5a6c1a42695b53db!8m2!3d48.8271194!4d2.3426038!16s%2Fg%2F11f0l1gfrd?entry=ttu"
//         >
//           Gymnase Glacière - 121 rue de la glacière, 75013 Paris.
//         </a>
//       </p>
//     </div>
//     <Button
//       className="w-32"
//       onClick={() => router.push("/mur")}
//       color="primary"
//       radius="full"
//     >
//       En savoir plus
//     </Button>
//   </div>
// </section>
// <div className="relative h-[280px] md:h-[320px] xl:h-[450px]">
//   <Image
//     alt="landscape-standing-climber"
//     className="aspect-auto overflow-hidden rounded-md object-cover object-center"
//     src="/images/landscape-standing-climber-2-mirror.webp"
//     fill
//     priority
//     sizes="lg"
//   />
//   <div className="absolute bottom-1/4 left-0 p-2 lg:top-0 lg:flex lg:flex-col lg:p-4">
//     <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
//       <TextGenerateEffect words="Cordée 13" />
//     </h1>
//     <TextGenerateEffect
//       words="Association parisienne d'escalade affiliée à la FSGT"
//       className="font-bold text-white"
//     />
//   </div>
// </div>
// {/* <div className="relative min-h-[300px]">
//   <Image
//     alt="landscape-standing-climber"
//     className="aspect-auto overflow-hidden rounded-md object-cover object-center shadow-lg shadow-black"
//     src="/images/realistic-climber-sunny.webp"
//     fill
//   />
// </div> */}
// <h2 className="text-xl font-bold">{"Dernières actualités du club"}</h2>
// <section className="col-span-2 grid gap-4 xl:grid-cols-4">
//   <SimpleCard
//     className="border-2 bg-transparent shadow-lg shadow-black"
//     content={{
//       category: "Inscription",
//       date: "09/09/2023",
//       description: "Saison 2023/2024",
//     }}
//   >
//     <p className="text-justify text-sm">
//       Les inscriptions adultes ont débuté. Les tirage au sort sera
//       effectué...
//     </p>
//   </SimpleCard>
//   <SimpleCard
//     className="border-2 bg-transparent shadow-lg shadow-black"
//     content={{
//       category: "Inscription",
//       date: "09/09/2023",
//       description: "Saison 2023/2024",
//     }}
//   >
//     <p className="text-justify text-sm">
//       Les inscriptions adultes ont débuté. Les tirage au sort sera
//       effectué...
//     </p>
//   </SimpleCard>
//   <SimpleCard className="border-2 bg-transparent shadow-lg shadow-black">
//     <Image
//       alt="Card background"
//       className="rounded-xl object-cover p-2"
//       src="/images/landscape-moutains-alpes.webp"
//       fill={true}
//     />
//   </SimpleCard>
//   <SimpleCard className="border-2 bg-transparent shadow-lg shadow-black">
//     <Image
//       alt="Card background"
//       className="rounded-xl object-cover p-2"
//       src="/images/landscape-moutains-alpes.webp"
//       fill={true}
//     />
//   </SimpleCard>
//   {/* <div className="flex flex-col">

//     </div>
//   </div> */}
// </section>

// <div className="divide-y-1 flex flex-col gap-6">
//   <div className="flex flex-col gap-4">
//     <h2 className="text-2xl font-bold">{"A propos de l'association"}</h2>
//     <p className="line-clamp-2 text-justify leading-relaxed xl:line-clamp-4">
//       Cordée 13 est une association d’escalade très récente,{" "}
//       <span className="font-bold">créée en juillet 2021</span>. Cordée 13
//       est très proche de{" "}
//       <a
//         href={"https://www.grimpe13.org/"}
//         target="_blank"
//         className="hover:text-burnt-sienna font-bold underline"
//       >
//         Grimpe13
//       </a>{" "}
//       qui dispose des créneaux d’occupation du gymnase et nous accompagne
//       dans le démarrage de l’activité associative.
//     </p>
//     <Button
//       className="hover:text-burnt-sienna hover:border-burnt-sienna w-32"
//       color="primary"
//       variant="bordered"
//       radius="full"
//       onClick={() => router.push("/association")}
//     >
//       En savoir plus
//     </Button>
//   </div>

//   <div className="flex flex-col gap-4">
//     <h2 className="mt-4 text-2xl font-bold">Le mur</h2>
//     <p className="line-clamp-2 text-justify leading-relaxed xl:line-clamp-4">
//       {"Cordée 13 est occupe le mur d'escalade du gymnase Glacière."}
//       <br />
//       <span className="font-bold">Adresse : </span>
//       <a
//         target="_blank"
//         className="hover:text-burnt-sienna font-bold underline"
//         href="https://www.google.fr/maps/place/Gymnase+Glaci%C3%A8re/@48.8271194,2.3400289,17z/data=!3m2!4b1!5s0x47e67197e68bf33b:0xc540091566f87c3b!4m6!3m5!1s0x47e67197e2384093:0x5a6c1a42695b53db!8m2!3d48.8271194!4d2.3426038!16s%2Fg%2F11f0l1gfrd?entry=ttu"
//       >
//         Gymnase Glacière - 121 rue de la glacière, 75013 Paris.
//       </a>
//     </p>
//     <Button
//       className="hover:text-burnt-sienna hover:border-burnt-sienna w-32"
//       color="primary"
//       variant="bordered"
//       radius="full"
//       onClick={() => router.push("/mur")}
//     >
//       En savoir plus
//     </Button>
//   </div>

//   <div className="hidden gap-4 2xl:flex 2xl:flex-col">
//     <h2 className="mt-4 text-2xl font-bold">Dernières actualités</h2>
//     <div className="grid gap-2 2xl:grid-cols-2 2xl:gap-4">
//       <SimpleCard className="border-2">
//         <Image
//           alt="Card background"
//           className="rounded-xl object-cover p-2"
//           src="/images/landscape-moutains-alpes.webp"
//           fill={true}
//         />
//       </SimpleCard>
//       <SimpleCard
//         className="border-2"
//         content={{
//           category: "Inscription",
//           date: "09/09/2023",
//           description: "Saison 2023/2024",
//         }}
//       >
//         <p className="text-justify text-sm">
//           Les inscriptions adultes ont débuté. Les tirage au sort sera
//           effectué...
//         </p>
//       </SimpleCard>
//       {/* <SimpleCard
//         className="border-2"
//         content={{
//           category: "Inscription",
//           date: "09/09/2023",
//           description: "Saison 2023/2024",
//         }}
//       >
//         <p className="text-justify text-sm">
//           Les inscriptions adultes ont débuté. Les tirage au sort sera
//           effectué...
//         </p>
//       </SimpleCard> */}
//     </div>
//   </div>
// </div>

// <div className="flex-row-reverse">
//   <div className="relative h-[250px] md:h-[400px] lg:h-[600px] lg:w-[600px] xl:h-[650px] xl:w-[650px] 2xl:h-[750px] 2xl:w-[750px]">
//     <Image
//       alt="landscape-standing-climber"
//       // className="hidden overflow-hidden object-cover object-center lg:block"
//       className="overflow-hidden rounded-md object-cover object-center lg:block"
//       src="/images/square-standing-climber.webp"
//       fill
//       priority
//     />
//     <div className="absolute bottom-1/4 left-0 p-2 lg:bottom-1/3 lg:left-6 lg:flex lg:flex-col lg:p-4 xl:left-10">
//       <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
//         <TextGenerateEffect words="Cordée 13" />
//       </h1>
//       <TextGenerateEffect
//         words="Association parisienne d'escalade affiliée à la FSGT"
//         className="font-bold text-white"
//       />
//     </div>
//   </div>
// </div>

// <div className="col-span-2 gap-4 2xl:hidden">
//   <h2 className="mt-4 text-2xl font-bold">Dernières actualités</h2>
//   <div className="grid gap-2 md:grid-cols-3 md:gap-4">
//     <SimpleCard className="border-2">
//       <Image
//         alt="Card background"
//         className="rounded-xl object-cover p-2"
//         src="/images/landscape-moutains-alpes.webp"
//         fill={true}
//       />
//     </SimpleCard>
//     <SimpleCard
//       className="border-2"
//       content={{
//         category: "Inscription",
//         date: "09/09/2023",
//         description: "Saison 2023/2024",
//       }}
//     >
//       <p className="text-justify text-sm">
//         Les inscriptions adultes ont débuté. Les tirage au sort sera
//         effectué...
//       </p>
//     </SimpleCard>
//     <SimpleCard
//       className="border-2"
//       content={{
//         category: "Inscription",
//         date: "09/09/2023",
//         description: "Saison 2023/2024",
//       }}
//     >
//       <p className="text-justify text-sm">
//         Les inscriptions adultes ont débuté. Les tirage au sort sera
//         effectué...
//       </p>
//     </SimpleCard>
//   </div>
// </div>
