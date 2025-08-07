import { useAuth } from "@hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/products" />;
};
