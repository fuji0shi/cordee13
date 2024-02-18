import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";
import { api } from "@/utils/api";

export const Home: NextPageWithLayout = () => {
  const p = api.post.getPosts.useQuery();
  console.log(p.data);
  return <div>test</div>;
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
