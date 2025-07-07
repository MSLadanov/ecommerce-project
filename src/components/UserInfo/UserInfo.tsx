import { ReactElement } from "react";
import { useAuth } from "@hooks/useAuth";
import { Loader } from "../Loader";
import "./style.scss";

export const UserInfo = (): ReactElement => {
  const { userData, isLoading, isError } = useAuth();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return <div className="user-info">{userData.address.address}</div>;
};
