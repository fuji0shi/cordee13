import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Seances: NextPageWithLayout = () => {
  return (
    <div>
      <h1>{"Les séances progression"}</h1>
    </div>
  );
};

Seances.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Seances;
