import React from "react";
import AuthLayout from "@/layouts/auth-layout";
import { Logo } from "@/components/logo/logo-minimalist";

export const Login = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-8 py-36">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-extrabold">
            Connectez-vous à votre compte
          </h1>
          <p>Cet accès est réservé aux membres de cordée 13.</p>
          {/* <LoginForm />
          <Toaster /> */}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
