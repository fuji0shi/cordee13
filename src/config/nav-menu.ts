import type { NavbarItem } from "@/types";

export const navbarContent: NavbarItem[] = [
  { title: "L'association", href: "/association" },
  { title: "Les collectifs", href: "/collectifs" },
  {
    title: "Les activités",
    items: [
      { title: "Les sorties", href: "/activites/sorties", icon: "leaf" },
      {
        title: "Les séances progression",
        href: "/activites/seances",
        icon: "bring-to-front",
      },
    ],
  },
  { title: "Le mur", href: "/mur" },
  {
    title: "Informations pratiques",
    items: [
      { title: "Contact", href: "/informations/contact", icon: "contact" },
      { title: "Horaires", href: "/informations/horaires", icon: "clock" },
    ],
  },
];
