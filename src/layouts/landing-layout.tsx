import SimpleNavbar from "@/components/navbar/simple-navbar";
import BaseLayout from "@/layouts/base-layout";
import type { LayoutProps } from "@/types";
import { Footer } from "@/components/footer/footer";

export const LandingLayout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <header className="sticky top-0 z-10 flex w-full items-center px-2 backdrop-blur-lg md:px-6 xl:px-40 2xl:px-52 3xl:px-80">
        <SimpleNavbar />
      </header>
      <main className="flex grow flex-col-reverse gap-4 px-2 py-2 md:grid md:grid-cols-[1fr_2fr] md:gap-12 md:px-6 md:py-6 lg:grid-cols-[4fr_4fr] lg:pt-6 xl:grid-cols-[4fr_6fr] xl:px-40 2xl:px-52 3xl:px-80">
        {children}
      </main>
      <div className="px-2 md:px-6 xl:px-40 2xl:px-52 3xl:px-80">
        <Footer />
      </div>
    </BaseLayout>
  );
};

export default LandingLayout;
