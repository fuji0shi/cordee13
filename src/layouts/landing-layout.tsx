import SimpleNavbar from "@/components/navbar/simple-navbar";
import BaseLayout from "@/layouts/base-layout";
import type { LayoutProps } from "@/types";

export const LandingLayout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <header className="sticky top-0 z-10 flex w-full items-center px-2 backdrop-blur-lg md:px-6 lg:px-20 dark:border-gray-600">
        <SimpleNavbar />
      </header>
      <main>
        <div
          className="flex flex-col px-2 py-20 md:px-6 lg:px-20"
          id="main-content"
        >
          {children}
        </div>
      </main>
    </BaseLayout>
  );
};

export default LandingLayout;
