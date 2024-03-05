import React from "react";
import { ThemeToggle } from "@/components/mode-toggle";
import { Button } from "@nextui-org/react";
import { NavbarDropdown } from "@/components/dropdown/navbar-dropdown";
import { navbarContent } from "@/config/nav-menu";
import { Logo } from "@/components/logo/logo-minimalist";
import { NavigationMenuShadcn } from "./navigation-menu-shadcn";

export const SimpleNavbar = () => {
  return (
    <nav className="flex w-full flex-row justify-between">
      <Logo className="text-rich-black w-[160px] dark:text-white" />
      <div className="grid w-full grid-flow-row grid-rows-2">
        <div className="flex justify-between">
          <div className="hidden basis-4/5 lg:flex">
            {/* <ul className="mx-auto flex flex-row items-center gap-6">
              {navbarContent.map((content, index) => (
                <li key={index}>
                  <NavbarDropdown content={content} />
                </li>
              ))}
            </ul> */}
            <NavigationMenuShadcn />
          </div>
          <div className="flex items-center justify-end gap-6 lg:basis-1/5">
            <ThemeToggle />
            <Button variant="ghost">Se connecter</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
