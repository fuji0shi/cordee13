import { Info } from "lucide-react";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <div className="mb-10">
        <Info size={100} />
      </div>
      <div className="space-y-8">
        <h1 className="page-title text-6xl">Erreur 404</h1>
        <p>{"La page que vous cherchez n'existe pas"}</p>
      </div>
      <Button variant={"light"}>
        <Link href={"/"}>{"Revenir à l'accueil"}</Link>
      </Button>
    </div>
  );
}
