import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const Icon = isVisible ? Eye : EyeOff;

  return (
    <div className="mb-6 flex w-full flex-col gap-8">
      <Input
        type="email"
        variant="flat"
        label="Votre identifiant"
        size="sm"
        radius="md"
      />
      <Input
        type={isVisible ? "text" : "password"}
        variant="flat"
        size="sm"
        radius="md"
        label="Votre mot de passe"
        endContent={
          <Icon onClick={toggleVisibility} className="cursor-pointer" />
        }
      />
      <div className="grid gap-1">
        <Button variant="ghost" color="primary">
          Se connecter
        </Button>
        <Link
          className="text-xs text-muted-foreground underline hover:text-burnt-sienna"
          href="/forgot-password"
        >
          Mot de passe oublié ?
        </Link>
      </div>

      <div className="min-h-[200px]">
        <p className="text-justify leading-relaxed">
          Si vous êtes membre de Cordée 13, vous pouvez effectuer votre demande
          de compte utlisateur en cliquant sur ce lien :{" "}
          <Link
            href={"/register"}
            className="text-muted-foreground underline hover:text-burnt-sienna"
          >
            Demande de compte utilisateur
          </Link>
        </p>
      </div>
    </div>
  );
}
