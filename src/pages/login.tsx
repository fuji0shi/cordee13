import React from "react";
import { Logo } from "@/components/logo/logo-minimalist";
import BaseLayout from "@/layouts/base-layout";
import { ThemeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useRouter } from "next/router";
import LoginForm from "@/components/form/login-form";

export const Login = () => {
  const router = useRouter();
  return (
    <BaseLayout>
      <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="absolute bottom-4 right-8 md:bottom-8 md:right-12">
          <ThemeToggle />
        </div>

        <div className="relative hidden h-full flex-col p-10 lg:flex">
          <div className="absolute inset-0 flex min-h-screen items-center justify-center">
            <Image
              alt="lanscape-moutains"
              className="aspect-auto overflow-hidden object-cover object-center"
              src="/images/realistic-landscape-moutains.webp"
              fill
              priority
              sizes="lg"
            />
            <div
              className="absolute left-0 top-0 cursor-pointer p-2 lg:flex lg:flex-col lg:p-5"
              onClick={() => router.push("/")}
            >
              <h1 className="border-b-1 border-white text-7xl font-extrabold text-white">
                <TextGenerateEffect words="Cordée 13" />
              </h1>
              <TextGenerateEffect
                words="Association parisienne d'escalade affiliée à la FSGT"
                className="text-lg font-bold text-white"
              />
            </div>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <footer className="text-xs text-white">
                © 2024 fuji0shi. All rights reserved.
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="grid place-items-center md:h-full">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="mb-6">
                <h1 className="text-3xl font-extrabold">
                  Connectez-vous à votre compte
                </h1>
                <p className="text-sm text-muted-foreground">
                  Cet accès est réservé aux membres de cordée 13.
                </p>
              </div>
              <div className="w-full 2xl:w-1/2 3xl:w-1/3">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Login;
