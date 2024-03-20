import React from "react";
import { LockKeyhole } from "lucide-react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export const PageAccessDenied = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <div className="mb-10">
        <LockKeyhole size={100} />
      </div>
      <div className="space-y-8">
        <h1 className="page-title text-center text-6xl">Erreur 403</h1>
        <p>
          Accès non autorisé, veuillez vous connecter pour afficher le contenu
        </p>
      </div>
      <Button variant={"light"}>
        <Link href={"/login"}>Se connecter</Link>
      </Button>
      <Button variant={"light"}>
        <Link href={"/"}>
          <p>{"Revenir à l'accueil"}</p>
        </Link>
      </Button>
    </div>
  );
};

export default PageAccessDenied;
