import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Sorties: NextPageWithLayout = () => {
  return (
    <div>
      <h1>{"Les sorties de l'association"}</h1>
    </div>
  );
};

Sorties.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Sorties;
