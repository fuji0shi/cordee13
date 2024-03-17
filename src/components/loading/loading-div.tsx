import { Loader2 } from "lucide-react";
export const LoadingDiv = () => {
  return (
    <div className="flex grow place-items-center justify-center">
      <Loader2 className="mr-2 h-[50px] w-[50px] animate-spin" />
    </div>
  );
};

export default LoadingDiv;
