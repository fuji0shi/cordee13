import MainLayout from "@/layouts/main-layout";
import { useRouter } from "next/router";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <MainLayout>
      <div className="grid gap-8">
        <h1 className="pb-2 text-2xl font-bold">Enregistrez-vous !</h1>
        <div className="flex flex-col gap-4">
          <p>
            Pour confirmer ton identité, saisi le code que tu as reçu par mail
          </p>
          <InputOTP
            maxLength={6}
            render={({ slots }) => (
              <>
                <InputOTPGroup>
                  {slots.slice(0, 3).map((slot, index) => (
                    <InputOTPSlot key={index} {...slot} />
                  ))}{" "}
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  {slots.slice(3).map((slot, index) => (
                    <InputOTPSlot key={index + 3} {...slot} />
                  ))}
                </InputOTPGroup>
              </>
            )}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
