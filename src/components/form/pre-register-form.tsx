import React from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { api } from "@/utils/api";
import { useToast } from "@/components/ui/use-toast";
import { generateSixDigitsNumber } from "@/utils/functions";
import { nanoid } from "nanoid";

export default function PreRegisterForm() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  const addlink = api.auth.createRegisterValidation.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const idRegisterLink = nanoid(16);
  const generateSixDigits = generateSixDigitsNumber();
  const content = `
    <div>
      <h2>Enregistrez-vous sur Cordée13 !</h2>
      <p>Afin de pouvoir te connecter en tant que membre à Cordée13, tu dois créer un compte utilisateur.</p>
      <p>Pour ce faire clique sur le lien suivant : <a href="http://localhost:3000/register/${idRegisterLink}">Créer mon compte.</a></p>
      <p>Un fois sur la page, tu devras saisir le code suivant : <strong>${generateSixDigits}</strong>.</p>
      <p>Si tu n'as pas demandé la création de ton compte, tu peux ignorer cet email.</p>
    </div>
  `;

  const sendMail = api.mail.sendRegisterMail.useQuery(
    {
      email: email,
      subject: "Création de votre compte à Cordée13",
      content: content,
    },
    { enabled: false },
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const refetchData = await sendMail.refetch();
    toast({
      title: `Email envoyé à ${email}`,
      variant: "success",
    });
    if (refetchData.isSuccess) {
      addlink.mutate({
        email: email,
        link: idRegisterLink,
        code: generateSixDigits,
      });
    }
    setEmail("");
  };

  return (
    <div className="mb-6 flex w-full flex-col gap-8">
      <p className="text-justify leading-relaxed">
        {
          "Pour effectuer ta demande de création de compte, tu dois fournir l'adresse email avec laquelle tu t'es inscrit à Cordée 13. Tu recevras un email afin de finaliser la création du compte."
        }
      </p>
      <form onSubmit={(e) => handleSubmit(e)} className="grid gap-6">
        <Input
          type="email"
          size="sm"
          variant="flat"
          radius="md"
          label="Ton adresse email"
          value={email}
          onChange={handleChange}
          isRequired
        />
        <div className="grid gap-1">
          <Button variant="ghost" color="primary" type="submit">
            Envoyer la demande
          </Button>
        </div>
      </form>
      <div>
        <p className="text-justify leading-relaxed">
          {
            "Si la procédure n'a pas fonctionné et que tu n'as pas reçu d'email de Cordée13, tu peux nous écrire à cette adresse "
          }
          <a
            className="underline hover:text-burnt-sienna"
            href="mailto:compte@cordee13.org"
          >
            compte@cordee13.org
          </a>
        </p>
      </div>
    </div>
  );
}
