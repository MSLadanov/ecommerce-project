import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

interface IUserInfoTextProps {
  title: string;
  info: string;
}

export const UserInfoText: React.FC<IUserInfoTextProps> = ({
  title,
  info,
}): ReactElement => {
  return (
    <Flex justifyContent="space-between">
      <h2>{title}:</h2>
      <h2>{info}</h2>
    </Flex>
  );
};
