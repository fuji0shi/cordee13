import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Actualites: NextPageWithLayout = () => {
  return (
    <div>
      <h1>{"Les actualités de notre association"}</h1>
    </div>
  );
};

Actualites.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Actualites;
