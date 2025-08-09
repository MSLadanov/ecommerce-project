import { ReactElement } from "react";
import { useAuth } from "@hooks/useAuth";
import { FaRegFaceFrown } from "react-icons/fa6";

export const Error = (): ReactElement => {
  const { isError } = useAuth();
  return (
    <div className="error-message">
      <FaRegFaceFrown />
      <h1>Something went wrong...</h1>
      <h2>{isError}</h2>
    </div>
  );
};
