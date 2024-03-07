import BaseLayout from "@/layouts/base-layout";
import type { LayoutProps } from "@/types";
import { ThemeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { useRouter } from "next/router";

export const AuthLayout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <BaseLayout>
      <div className="container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="absolute right-4 top-4 md:right-8 md:top-8">
          <slot name="right-corner" />
        </div>

        <div className="absolute bottom-4 right-8 md:bottom-8 md:right-12">
          <ThemeToggle />
        </div>

        <div className="relative hidden h-full flex-col p-10 lg:flex">
          <div className="absolute inset-0 flex min-h-screen items-center justify-center">
            <Image
              alt="Card background"
              className="aspect-auto overflow-hidden object-cover object-center"
              src="/images/realistic-landscape-moutains.webp"
              fill={true}
            />
            <div
              className="absolute left-0 top-0 cursor-pointer p-2 lg:flex lg:flex-col lg:p-5"
              onClick={() => router.push("/")}
            >
              <h1 className="border-b-1 border-white text-6xl font-extrabold text-white">
                Cordée 13
              </h1>
              <p className="text-white">
                {"Association parisienne d'escalade affiliée à la FSGT"}
              </p>
            </div>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <footer className="text-xs">
                © 2024 idiLik. All rights reserved.
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="md:h-full">{children}</div>
      </div>
    </BaseLayout>
  );
};
export default AuthLayout;
