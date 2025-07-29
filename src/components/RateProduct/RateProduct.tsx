import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import { TextArea } from "@components/ui/TextArea";
import { Button } from "@components/ui/Button";
import { FaCommentAlt } from "react-icons/fa";
import { StarsInput } from "@components/StarsInput";
import "./style.scss";

export const RateProduct = (): ReactElement => {
  return (
    <Flex className="rate-product__wrapper" flexDirection="column">
      <StarsInput/>
      <Flex className="rate-product" justifyContent="space-between">
        <TextArea id="rate-field" name="rate-field" />
        <Button styleGuide="ozon">
          <FaCommentAlt />
        </Button>
      </Flex>
    </Flex>
  );
};
