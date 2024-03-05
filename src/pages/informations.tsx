import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Informations: NextPageWithLayout = () => {
  return (
    <div>
      <h1>{"Informations pratiques"}</h1>
    </div>
  );
};

Informations.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Informations;
