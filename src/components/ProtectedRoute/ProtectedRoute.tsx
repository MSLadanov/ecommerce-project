import { useAuth } from "@hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router";

export const ProtectedRoute = ({
  children,
  redirect,
}: {
  children: ReactNode;
  redirect: string;
}) => {
  const { isAuth, isError } = useAuth();
  return !isAuth && isError ? <Navigate to={redirect} /> : children;
};
