import SimpleNavbar from "@/components/navbar/simple-navbar";
import BaseLayout from "@/layouts/base-layout";
import type { LayoutProps } from "@/types";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <header className="border-b-1 sticky top-0 z-10 flex h-16 w-full items-center px-2 backdrop-blur-lg md:px-4 lg:px-6 dark:border-gray-600">
        <SimpleNavbar />
      </header>
      <main className="md:px-4 lg:px-6">
        <div className="flex flex-col py-4" id="main-content">
          {children}
        </div>
      </main>
    </BaseLayout>
  );
};

export default MainLayout;
