import { useState } from "react";
import MainLayout from "@/layouts/main-layout";
import { useRouter } from "next/router";
import { Button } from "@nextui-org/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { api } from "@/utils/api";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import RegisterForm from "@/components/form/register-form";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const slugLink = slug as string;
  const [inputOtpValue, setInputOtpValue] = useState<string>();
  const [isCodeValid, setIsCodeValid] = useState<boolean>(false);
  const { toast: toastPreRegister } = useToast();

  const registerLink = api.auth.getRegisterValidation.useQuery(
    {
      link: slugLink,
      code: Number(inputOtpValue),
    },
    {
      enabled: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        if (data) {
          //vérifier si le lien est encore valide par rapport à la date du jour
          if (data.expires < new Date()) {
            toastPreRegister({
              title: "Le code n'est plus valide",
              variant: "destructive",
              description:
                "Le lien a expiré, vous devez en générer un nouveau.",
            });
            return;
          }
          //si le lien est encore actif on notifie l'utilisateur
          toastPreRegister({
            title: "Le code est valide",
            variant: "success",
          });
          setIsCodeValid(true);
        } else {
          toastPreRegister({
            title: "Le code n'est pas valide",
            variant: "destructive",
          });
        }
      },
      onError: (error) => {
        toastPreRegister({
          title: "Une erreur est survenue, veuillez réessayer plus tard",
          variant: "destructive",
          description: error.message,
        });
      },
    },
  );

  const handleSubmitPreRegister = async () => {
    if (!inputOtpValue || inputOtpValue.length < 6) {
      toastPreRegister({
        title: "Le code saisie est imcomplet",
        variant: "destructive",
      });
      return;
    }

    await registerLink.refetch();
  };

  console.log(isCodeValid);

  return (
    <MainLayout>
      <div className="grid gap-8">
        <div className="grid gap-8">
          <div className="w-1/2">
            <h1 className="pb-2 text-2xl font-bold">
              Création de votre compte
            </h1>
          </div>
          {!isCodeValid ? (
            <div className="flex gap-4">
              <InputOTP
                maxLength={6}
                value={inputOtpValue}
                onChange={(e) => setInputOtpValue(e)}
                render={({ slots }) => (
                  <div className="flex items-center gap-4">
                    <label className="font-bold" htmlFor="otp">
                      Code de validation
                      <span className="h-full align-top text-red-500">*</span>
                    </label>
                    <InputOTPGroup>
                      {slots.map((slot, index) => (
                        <InputOTPSlot key={index} {...slot} />
                      ))}
                    </InputOTPGroup>
                  </div>
                )}
              />
              <Button
                className="w-24"
                color="primary"
                onClick={() => handleSubmitPreRegister()}
                size="md"
              >
                Valider
              </Button>
            </div>
          ) : null}
        </div>
        {isCodeValid ? (
          <div className="grid rounded-md border-1 p-4">
            <RegisterForm slugLink={slugLink} />
          </div>
        ) : null}
        <Toaster />
      </div>
    </MainLayout>
  );
};

export default Page;
