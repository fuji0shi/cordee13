import React from "react";
import { DoorOpen } from "lucide-react";
import { useRouter } from "next/router";

import { cn } from "@/lib/utils";
type Content = {
  category?: string | null;
  date?: string | null;
  description?: string | null;
  href?: string;
};

type SimpleCardProps = {
  children?: React.ReactNode;
  className?: string;
  content?: Content;
};

export const SimpleCard = (props: SimpleCardProps) => {
  const {
    children,
    className,
    content = {
      category: "Sorties",
      date: "23/03/2024",
      description: "Sortie Haute",
    },
  } = props;
  const router = useRouter();
  return (
    <div
      className={cn(
        `flex cursor-pointer flex-col justify-between rounded-md p-4 hover:bg-muted`,
        className,
      )}
      onClick={() => router.push("/actualites")}
    >
      <div className="flex flex-col">
        <p className="flex w-full flex-row justify-between text-tiny font-bold uppercase">
          {content.category} <DoorOpen />
        </p>
        <small className="text-default-500">Posté le {content.date}</small>
        <h4 className="mb-2 line-clamp-3 font-bold">{content.description}</h4>
      </div>
      <div className="relative min-h-[110px] overflow-visible">{children}</div>
    </div>
  );
};
