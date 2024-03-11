import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { DoorOpen } from "lucide-react";

import { cn } from "@/lib/utils";
type Content = {
  category: string;
  date: string;
  description?: string;
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
  return (
    <div
      className={cn(`hover:bg-muted cursor-pointer rounded-md p-4`, className)}
    >
      <div className="flex-col items-start">
        <p className="text-tiny flex w-full flex-row justify-between font-bold uppercase">
          {content.category} <DoorOpen />
        </p>
        <small className="text-default-500">Posté le {content.date}</small>
        <h4 className="text-large mb-1 line-clamp-2 font-bold">
          {content.description}
        </h4>
      </div>
      <div className="relative min-h-[150px] overflow-visible">{children}</div>
    </div>
  );
};
