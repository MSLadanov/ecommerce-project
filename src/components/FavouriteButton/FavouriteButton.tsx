import { ReactElement } from "react";
import { Button } from "@components/ui/Button";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

export const FavouriteButton = (): ReactElement => {
  return (
    <Flex className="fav-button-container">
      <Button>Fav</Button>
    </Flex>
  );
};
