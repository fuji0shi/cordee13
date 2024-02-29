import React from "react";
import { ThemeToggle } from "@/components/mode-toggle";
import { Button } from "@nextui-org/react";
import { NavbarDropdown } from "@/components/dropdown/navbar-dropdown";
import { navbarContent } from "@/config/nav-menu";

export const SimpleNavbar = () => {
  return (
    <nav className="flex w-full flex-row items-center justify-between">
      <div>
        <span className="font-extrabold">Cordée13</span>
      </div>
      <div>
        <ul className="flex flex-row items-center gap-6">
          {navbarContent.map((content, index) => (
            <li key={index}>
              <NavbarDropdown content={content} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center gap-6">
        <ThemeToggle />
        <Button variant="ghost">Se connecter</Button>
        {/* <Avatar size="sm"/> */}
      </div>
    </nav>
  );
};

export default SimpleNavbar;
