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
  return (
    <Flex className="user-info" flexDirection="row" justifyContent="center">
      <Flex className="user-info__image">
        <img src={userData?.image} alt={userData?.firstName + " avatar"} />
      </Flex>
      <Flex className="user-info__bio" flexDirection="column">
        <Flex>{userData?.firstName}</Flex>
        <Flex>{userData?.maidenName}</Flex>
        <Flex>{userData?.lastName}</Flex>
        <Flex>{userData?.email}</Flex>
        <Flex>{userData?.phone}</Flex>
      </Flex>
    </Flex>
  );
};
