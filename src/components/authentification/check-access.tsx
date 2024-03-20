import React, { Fragment } from "react";
import { useSession } from "next-auth/react";
import AccessDenied from "./page-access-denied";
import { useRouter } from "next/router";
import LoadingPage from "@/components/loading/loading-transition";
//* Import ui component

//* Design element

//* Types, Interfaces
interface CheckAccessProps {
  children: React.ReactNode;
}

//* Constants

//* Functions

//*$ Composant principal
export const CheckAccess: React.FC<CheckAccessProps> = (props) => {
  const { children } = props;
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") return <LoadingPage />;

  if (status === "unauthenticated" && router.asPath === "/membres") {
    return <AccessDenied />;
  }

  return <Fragment>{children}</Fragment>;
};

export default CheckAccess;
