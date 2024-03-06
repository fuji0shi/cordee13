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
