import { useState } from "react";
import {
  Select,
  SelectItem,
  Button,
  Input,
  type InputProps,
  Textarea,
  Checkbox,
  RadioGroup,
  Radio,
  Snippet,
} from "@nextui-org/react";
import { UserCircle, Copy } from "lucide-react";
import { Mail } from "lucide-react";
import { api } from "@/utils/api";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import type { RegisterInput } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { zInputRegister } from "@/utils/zod/auth";
import { InputErrorMessage } from "@/components/error/input-error-message";
import { toast } from "../ui/use-toast";

type RegisterFormProps = {
  slugLink: string;
};

export default function RegisterForm(props: RegisterFormProps) {
  const { slugLink } = props;
  const userInfos = api.auth.getMemberInfosWithEmail.useQuery({
    link: slugLink,
  });
  console.log(userInfos.data);

  const climbingType = api.content.getEscaladeType.useQuery();
  const { data: dataClimbingType, isSuccess: isSuccessClimbingType } =
    climbingType;

  const voieCotation = api.content.getVoieCotation.useQuery();
  const { data: dataVoieCotation, isSuccess: isSuccessDataVoieCotation } =
    voieCotation;

  const collectifs = api.content.getCollectifs.useQuery();
  const { data: dataCollectifs, isSuccess: isSuccessDataCollectifs } =
    collectifs;

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const toggleVisibilityPassword = () =>
    setIsVisiblePassword(!isVisiblePassword);
  const IconPassword = isVisiblePassword ? Eye : EyeOff;

  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    useState(false);
  const toggleVisibilityConfirmPassword = () =>
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword);
  const IconConfirmPassword = isVisiblePassword ? Eye : EyeOff;

  const inputStyles: InputProps = {
    size: "sm",
    variant: "bordered",
    radius: "md",
  };

  const form = useForm<RegisterInput>({
    resolver: zodResolver(zInputRegister),
    defaultValues: {},
  });

  const registerUser = api.user.createUser.useMutation();

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data, "handleSubmit data");
    registerUser.mutate(
      {
        ...data,
      },
      {
        onSuccess: () => {
          console.log("success");
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="grid gap-12 lg:grid-cols-[2fr_4fr]">
          <div className="hidden lg:flex lg:flex-col">
            <h2 className="text-base font-semibold leading-7">Profil</h2>
            <p className="text-sm leading-6 text-muted-foreground">
              Ces informations seront visibles par les autres utilisateurs.
            </p>
            {/* <div className="grow bg-red-700">01</div> */}
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full flex items-center gap-4">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6"
              >
                Photo
              </label>
              <UserCircle
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <Button
                size="md"
                color="primary"
                radius="md"
                className="text-sm font-semibold"
                type="button"
              >
                Modifier
              </Button>
            </div>
            <div className="col-span-full">
              <div className="mt-2 flex items-center gap-x-3">
                <InputErrorMessage
                  message={form.formState.errors.name?.message}
                >
                  <Input
                    id="username"
                    label="Nom d'utilisateur"
                    {...inputStyles}
                    {...form.register("name")}
                  />
                </InputErrorMessage>
                <div className="w-full">
                  <Input
                    id="licence"
                    label="Numéro licence FSGT"
                    {...inputStyles}
                    {...form.register("licence")}
                    value="1364764"
                    endContent={
                      <Copy
                        className="h-5 w-5 cursor-pointer text-gray-400 hover:text-foreground"
                        aria-hidden="true"
                      />
                    }
                    isReadOnly
                  />
                  <div className="h-6"></div>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {
                  "Par défaut, il s'agit de ton prénom et la premère lettre de ton nom, mais tu peux le renseigner comme tu le souhaites."
                }
              </p>
            </div>

            <div className="col-span-full">
              <div className="mt-2 flex items-center gap-x-3">
                <InputErrorMessage
                  message={form.formState.errors.password?.message}
                >
                  <Input
                    id="password"
                    type={isVisiblePassword ? "text" : "password"}
                    {...inputStyles}
                    {...form.register("password")}
                    label="Votre mot de passe"
                    endContent={
                      <IconPassword
                        onClick={toggleVisibilityPassword}
                        className="cursor-pointer"
                      />
                    }
                  />
                </InputErrorMessage>
                <InputErrorMessage
                  message={form.formState.errors.confirm_password?.message}
                >
                  <Input
                    id="confirm-password"
                    type={isVisibleConfirmPassword ? "text" : "password"}
                    {...inputStyles}
                    {...form.register("confirm_password")}
                    label="Confirmez votre mot de passe"
                    endContent={
                      <IconConfirmPassword
                        onClick={toggleVisibilityConfirmPassword}
                        className="cursor-pointer"
                      />
                    }
                  />
                </InputErrorMessage>
              </div>
            </div>

            <div className="col-span-full">
              <div className="mt-2">
                <Textarea
                  id="about"
                  rows={2}
                  label={"A propos de vous"}
                  variant="bordered"
                  {...form.register("about")}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {"Ce que représente l'escalade pour toi !"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr_4fr]">
          <div className="hidden lg:flex lg:flex-col">
            <h2 className="text-base font-semibold leading-7">
              Informations personnelles
            </h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Renseignez vos informations personnelles.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <Input
                  type="text"
                  id="first-name"
                  label="Prénom"
                  {...inputStyles}
                  {...form.register("prenom")}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <Input
                  type="text"
                  id="last-name"
                  label="Nom"
                  {...inputStyles}
                  {...form.register("nom")}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <div className="mt-2">
                <Input
                  id="email"
                  type="email"
                  {...inputStyles}
                  {...form.register("email")}
                  label="Email"
                  endContent={
                    <Mail
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr_4fr]">
          <div className="hidden lg:flex lg:flex-col">
            <h2 className="text-base font-semibold leading-7">
              Informations grimpeurs
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              {
                "Totalement optionnel, ces informations sont destinées à vous aider à trouver des partenaires de grimpe."
              }
            </p>
          </div>

          <div className="space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6">
                Cotations réalisées (Climb-up ça compte pas désolé !)
              </legend>
              <div className="mt-6 space-y-6">
                {dataClimbingType && isSuccessClimbingType
                  ? dataClimbingType.map((type, index) => {
                      return (
                        <div
                          key={index}
                          className="relative flex items-center justify-between"
                        >
                          <div className="flex w-full flex-col gap-4 text-sm leading-6">
                            <div>
                              <label
                                htmlFor={type.type}
                                className="font-medium"
                              >
                                {type.type}
                              </label>
                              <p className="text-muted-foreground">
                                {type.description}
                              </p>
                            </div>
                            <Select
                              id={type.type}
                              variant="bordered"
                              radius="md"
                              className="w-40"
                              label="Cotation"
                              size="sm"
                              {...form.register("cotation_vue")}
                            >
                              {dataVoieCotation && isSuccessDataVoieCotation ? (
                                dataVoieCotation.map((cotation) => (
                                  <SelectItem key={cotation.cotation}>
                                    {cotation.cotation}
                                  </SelectItem>
                                ))
                              ) : (
                                <SelectItem key="cotation">
                                  Chargement...
                                </SelectItem>
                              )}
                            </Select>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-sm font-semibold leading-6">
                Année de grimpe (on est curieux hein ?)
              </legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Depuis combien de temps grimpes-tu ?
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <RadioGroup size="sm" {...form.register("annee_grimpe")}>
                    <Radio value="beginner">{"< 1 an"}</Radio>
                    <Radio value="intermediare">{"entre 1 an et 4 ans"}</Radio>
                    <Radio value="intermediaire-plus">
                      {"entre 5 et 10 ans"}
                    </Radio>
                    <Radio value="long-life">{"plus de 10 ans"}</Radio>
                    <Radio value="lol">
                      {"C'est comme mon âge je ne compte plus ..."}
                    </Radio>
                  </RadioGroup>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-[2fr_4fr]">
          <div className="hidden lg:flex lg:flex-col">
            <h2 className="text-base font-semibold leading-7">
              Collectifs Cordée13
            </h2>
            <p className="text-sm leading-6 text-muted-foreground">
              {
                "Egalement optionnel, liste les collectifs auxquels tu appartiens."
              }
            </p>
          </div>

          <div className="space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6">
                Liste des collectifs
              </legend>
              <div className="mt-4 grid grid-cols-2">
                {isSuccessDataCollectifs && dataCollectifs
                  ? dataCollectifs.map((collectif) => (
                      <div key={collectif.name}>
                        <Checkbox />
                        <label
                          htmlFor={collectif.name}
                          className="text-sm capitalize leading-6"
                        >
                          {collectif.name}
                        </label>
                      </div>
                    ))
                  : null}
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 py-6">
        <Button
          size="sm"
          color="primary"
          radius="md"
          className="text-sm font-semibold"
          variant="ghost"
          type="reset"
        >
          Annuler
        </Button>
        <Button
          type="submit"
          size="sm"
          color="primary"
          radius="md"
          className="text-sm font-semibold"
        >
          Sauvegarder
        </Button>
      </div>
    </form>
  );
}
