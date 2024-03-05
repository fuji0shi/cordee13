import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Mur: NextPageWithLayout = () => {
  return (
    <div>
      <h1>{"Le mur"}</h1>
    </div>
  );
};

Mur.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Mur;
