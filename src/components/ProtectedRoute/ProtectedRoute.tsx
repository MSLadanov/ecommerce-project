import { useAuth } from "@hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children, redirect }: { children: ReactNode, redirect: string }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to={redirect} />;
};
