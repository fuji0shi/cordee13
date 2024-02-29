import MainLayout from "@/layouts/main-layout";
import type { NextPageWithLayout } from "@/pages/_app";

export const Contact: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-xl font-extrabold">Contact</h1>
      <div className="grid grid-cols-2 py-4 md:py-6 lg:py-8"></div>
    </div>
  );
};

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Contact;
