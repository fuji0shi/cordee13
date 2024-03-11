import React from "react";
import { ThemeToggle } from "@/components/mode-toggle";
import { Button } from "@nextui-org/button";
import { Logo } from "@/components/logo/logo-alphabet";
import { NavigationMenuShadcn } from "./navigation-menu-shadcn";
import Link from "next/link";
import { useRouter } from "next/router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const SimpleNavbar = () => {
  const router = useRouter();
  return (
    <nav className="flex w-full flex-row items-start justify-between">
      <div className="flex cursor-pointer py-4 min-[901px]:hidden">
        <Sheet key={"left"}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            {/* <HamburgerNavbar userName={session?.user.name} /> */}
          </SheetContent>
        </Sheet>
      </div>
      <Link href={"/"} className="flex basis-1/6 max-[1130px]:hidden">
        <Logo className="text-rich-black hover:text-burnt-sienna dark:hover:text-burnt-sienna w-[140px] dark:text-white" />
      </Link>
      <div className="py-2 max-[900px]:hidden lg:basis-3/6">
        <NavigationMenuShadcn />
      </div>
      <div className="flex basis-2/6 justify-end gap-8 py-2">
        <ThemeToggle />
        <Button
          onClick={() => router.push("/login")}
          radius="full"
          color="primary"
        >
          Accès membre
        </Button>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
