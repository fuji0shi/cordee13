import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

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
      date: "Posté le 23/03/2024",
      description: "Sortie Haute Roche",
    },
  } = props;
  return (
    <Card className={cn(`py-2`, className)}>
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold uppercase">{content.category}</p>
        <small className="text-default-500">{content.date}</small>
        <h4 className="text-large font-bold">{content.description}</h4>
      </CardHeader>
      <CardBody className="min-h-[100px] cursor-pointer overflow-visible">
        {children}
      </CardBody>
    </Card>
  );
};
