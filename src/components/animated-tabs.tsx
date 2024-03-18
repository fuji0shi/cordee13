import Image from "next/image";
import { Tabs } from "@/components/ui/aceternity-tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Le dévers",
      value: "devers",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl p-10">
          <Image
            src="/images/mur-2-800.webp"
            alt="dummy image"
            fill
            className="absolute inset-x-0 -bottom-10  mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[100%]"
          />
        </div>
      ),
    },
    {
      title: "La dalle",
      value: "dalle",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl p-10">
          <Image
            src="/images/mur-4-800.webp"
            alt="dummy image"
            fill
            className="absolute inset-x-0 -bottom-10  mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
          />
        </div>
      ),
    },
    {
      title: "Le dièdre 1",
      value: "diedre 1",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Le dièdre 1</p>
        </div>
      ),
    },
    {
      title: "Le dièdre 2",
      value: "diedre 2",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Le dièdre</p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex h-[400px] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[700px]">
      <Tabs tabs={tabs} />
    </div>
  );
}
