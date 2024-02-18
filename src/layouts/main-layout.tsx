import BaseLayout from "@/layouts/base-layout";
import type { LayoutProps } from "@/types";
import { ThemeToggle } from "@/components/mode-toggle";

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <BaseLayout>
      <header className="sticky top-0 z-10 flex h-16 w-full items-center px-2 shadow-md backdrop-blur-lg md:px-4 lg:px-6">
        <ThemeToggle />
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
