import SimpleNavbar from "@/components/navbar/simple-navbar";
import BaseLayout from "@/layouts/base-layout";
import type { LayoutProps } from "@/types";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <header className="sticky top-0 z-10 flex w-full items-center backdrop-blur-lg dark:border-gray-600">
        <SimpleNavbar />
      </header>
      <main>
        <div className="flex flex-col py-4" id="main-content">
          {children}
        </div>
      </main>
    </BaseLayout>
  );
};

export default MainLayout;
