import { ReactElement } from "react";
import { useAuth } from "@hooks/useAuth";
import { Loader } from "@components/Loader";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

export const UserInfo = (): ReactElement => {
  const { userData, isLoading, isError } = useAuth();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return <Flex className="user-info">{userData.address.address}</Flex>;
};
