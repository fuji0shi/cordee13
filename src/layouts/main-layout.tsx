import SimpleNavbar from "@/components/navbar/simple-navbar";
import BaseLayout from "@/layouts/base-layout";
import type { LayoutProps } from "@/types";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <header className="sticky top-0 z-10 flex w-full items-center px-2 backdrop-blur-lg md:px-6 lg:px-20">
        <SimpleNavbar />
      </header>
      <main
        className="flex grow flex-col px-2 py-4 md:px-6 lg:px-20"
        id="main-content"
      >
        {children}
      </main>
    </BaseLayout>
  );
};

export default MainLayout;
