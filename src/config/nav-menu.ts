import type { NavbarItem } from "@/types";

export const navbarContent: NavbarItem[] = [
  { title: "La vie associative", href: "/association" },
  {
    title: "Informations pratiques",
    items: [
      { title: "Contact", href: "/informations/contact", icon: "contact" },
      { title: "Horaires", href: "/informations/horaires", icon: "clock" },
    ],
  },
];
