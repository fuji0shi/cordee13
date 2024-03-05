import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Contact: NextPageWithLayout = () => {
  return (
    <div>
      <h1>{"Contact"}</h1>
    </div>
  );
};

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Contact;
