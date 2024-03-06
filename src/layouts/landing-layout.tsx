import SimpleNavbar from "@/components/navbar/simple-navbar";
import BaseLayout from "@/layouts/base-layout";
import type { LayoutProps } from "@/types";
import { Footer } from "@/components/footer/footer";

export const LandingLayout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <header className="sticky top-0 z-10 flex w-full items-center px-2 backdrop-blur-lg md:px-6 lg:px-20">
        <SimpleNavbar />
      </header>
      <main className="flex flex-col gap-4 px-2 py-12 md:grid md:px-6 lg:grid-cols-[5fr_6fr] lg:px-20">
        {children}
      </main>
      <div className="px-2 md:px-6 lg:px-20">
        <Footer />
      </div>
    </BaseLayout>
  );
};

export default LandingLayout;
