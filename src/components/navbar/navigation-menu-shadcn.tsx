import * as React from "react";
import { navMenuConfig } from "@/config/nav-menu";
import type { MenuItem } from "@/types";
import Link from "next/link";

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

const association = navMenuConfig.association[0];
const activites = navMenuConfig.activites[0];
const espace = navMenuConfig.espace[0];

export function NavigationMenuShadcn() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="data-[state=open]:text-burnt-sienna px-0">
            <span className="lg:text-md hover:text-burnt-sienna focus:text-burnt-sienna md:text-sm">
              {association?.title}
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/association"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      {"A propos de c13"}
                    </div>
                    <p className="text-muted-foreground text-xs leading-tight">
                      {"Association parisienne d'escalade affiliée à la FSGT"}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {association?.items?.map((item, i) => (
                <ListItem href={item.href} title={item.title} key={i}>
                  <span className="text-xs">{item.description}</span>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="data-[state=open]:text-burnt-sienna">
            <span className="lg:text-md hover:text-burnt-sienna focus:text-burnt-sienna md:text-sm">
              {activites?.title}
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {activites?.items?.map((item, i) => (
                <ListItem href={item.href} title={item.title} key={i}>
                  <span className="text-xs">{item.description}</span>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
