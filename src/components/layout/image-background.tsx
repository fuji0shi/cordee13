import Image from "next/image";
const HeroPage = () => {
  return (
    <div className="flex flex-col">
      <Image
        alt="hanging-man"
        className="aspect-auto overflow-hidden rounded-sm object-cover object-center shadow-md shadow-black"
        src="/images/landscape-moutains-alpes.webp"
        fill={true}
      />
      <div className="absolute">
        <h1 className="text-5xl font-extrabold">Bienvenue sur cordée 13 </h1>
      </div>
    </div>
  );
};
