import * as React from "react";
import { navMenuConfig } from "@/config/nav-menu";
import type { MenuItem } from "@/types";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const association = navMenuConfig.association[0];
const activites = navMenuConfig.activites[0];
const espace = navMenuConfig.espace[0];

export function NavigationMenuShadcn() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* className="data-[state=open]:text-burnt-sienna px-0 */}
          <NavigationMenuTrigger className="data-[state=open]:text-burnt-sienna px-0">
            <span className="md:text-sm lg:text-lg">{association?.title}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="bg-muted flex h-full w-full select-none flex-col justify-center rounded-md p-6 no-underline outline-none focus:shadow-md"
                    href="/association"
                  >
                    <div className="mb-2 mt-4 text-xl font-medium">
                      {"A propos de c13"}
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      {"Association parisienne d'escalade affiliée à la FSGT"}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {/* {association?.items?.map((item, i) => (
                <ListItem href={item.href} title={item.title} key={i}>
                  <span className="text-xs">{item.description}</span>
                </ListItem>
              ))} */}
              {association?.items?.map((asso) => (
                <ListItem key={asso.title} {...asso} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="data-[state=open]:text-burnt-sienna">
            <span className="md:text-sm lg:text-lg">{activites?.title}</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {activites?.items?.map((ac) => (
                <ListItem key={ac.title} {...ac} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* className="hover:text-lapis-lazuli focus:text-burnt-sienna" */}
        {navMenuConfig.links.map((link) => (
          <NavigationMenuItem
            key={link.title}
            className="hover:text-burnt-sienna focus:text-burnt-sienna"
          >
            <Link
              key={link.href}
              href={link.href}
              className={navigationMenuTriggerStyle()}
            >
              {link.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem: React.FC<MenuItem> = ({
  title,
  href,
  description,
  launched,
  disabled,
  external,
}) => {
  const target = external ? "_blank" : undefined;

  return (
    <li>
      <Link
        href={disabled ? "#" : href}
        target={target}
        className={cn(
          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
          disabled
            ? "text-muted-foreground hover:text-muted-foreground hover:bg-transparent"
            : "",
        )}
      >
        <div className="text-sm font-medium leading-none">
          <span className="mr-2">{title}</span>
          {disabled ? (
            <Badge
              variant="secondary"
              className="h-5 px-1.5 text-xs font-medium"
            >
              Bientôt
            </Badge>
          ) : null}
          {launched ? (
            <Badge className="h-5 px-1.5 text-xs font-medium">Nouveau</Badge>
          ) : null}
        </div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
          {description}
        </p>
      </Link>
    </li>
  );
};
ListItem.displayName = "ListItem";
