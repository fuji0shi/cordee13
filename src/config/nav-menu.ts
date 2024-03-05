import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  association: [
    {
      title: "L'assocation",
      items: [
        {
          title: "Les collectifs",
          href: "/association/collectifs",
          description: "L'organisation de notre association.",
        },
        {
          title: "Inscriptions",
          href: "/association/inscriptions",
          description: "Comment s'inscrire à cordée 13 ?",
        },
        {
          title: "Nous contacter",
          href: "/association/contact",
          description: "Liste des contacts du club !",
        },
      ],
    },
  ],
  activites: [
    {
      title: "Les activités",
      items: [
        {
          title: "Les séances progession",
          href: "/activites/seances",
          description: "Informations sur les séances.",
        },
        {
          title: "Les sorties extérieur",
          href: "/activites/sorties",
          description: "Les sorties du club !",
        },
      ],
    },
  ],
  espace: [
    {
      title: "Administration",
      items: [
        { title: "Mur", href: "/administration/mur" },
        { title: "Membres", href: "/administration/membres" },
        { title: "Matériels", href: "/administration/materiels" },
      ],
    },
  ],
  links: [
    { title: "Actualités", href: "/actualites" },
    { title: "Le mur", href: "/mur" },
    { title: "Informations pratiques", href: "/informations" },
  ],
};
