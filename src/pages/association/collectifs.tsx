import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Collectifs: NextPageWithLayout = () => {
  return (
    <div>
      <h1>{"Les collectifs de l'association"}</h1>
    </div>
  );
};

Collectifs.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Collectifs;
