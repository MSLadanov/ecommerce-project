import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import { IUser } from "@/types/Users";
import "./style.scss";

export const UserInfo = ({ userData }: { userData: IUser }): ReactElement => {
  return (
    <Flex className="user-info" flexDirection="row" justifyContent="center">
      <Flex className="user-info__image">
        {userData && (
          <img src={userData?.image} alt={userData?.firstName + " avatar"} />
        )}
      </Flex>
      <Flex className="user-info__bio" flexDirection="column">
        <Flex>{userData?.firstName}</Flex>
        {userData?.maidenName && <Flex>{userData?.maidenName}</Flex>}
        <Flex>{userData?.lastName}</Flex>
        <Flex>{userData?.email}</Flex>
        <Flex>{userData?.phone}</Flex>
      </Flex>
    </Flex>
  );
};
