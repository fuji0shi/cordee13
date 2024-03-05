import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Inscriptions: NextPageWithLayout = () => {
  return (
    <div>
      <h1>{"Comment s'inscrire à notre association"}</h1>
    </div>
  );
};

Inscriptions.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Inscriptions;
