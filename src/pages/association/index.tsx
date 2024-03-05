import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Association: NextPageWithLayout = () => {
  return (
    <div>
      <h1>{"A propos de l'association"}</h1>
    </div>
  );
};

Association.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Association;
