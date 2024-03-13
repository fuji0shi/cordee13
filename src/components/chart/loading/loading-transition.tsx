import { MoreHorizontal } from "lucide-react";

export const LoadingPage = () => {
  return (
    <div className="bg fixed left-0 top-0 z-50 flex h-screen w-screen place-items-center justify-center backdrop-blur-lg">
      <MoreHorizontal className="mr-2 h-20 w-20 animate-pulse" />
    </div>
  );
};

export default LoadingPage;
