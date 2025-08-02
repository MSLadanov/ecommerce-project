import { Dispatch, ReactElement, SetStateAction } from "react";
import { Flex } from "@components/ui/Flex";
import { TextArea } from "@components/ui/TextArea";
import { Button } from "@components/ui/Button";
import { FaCommentAlt } from "react-icons/fa";
import { StarsInput } from "@components/StarsInput";
import "./style.scss";

interface IRateProductProps {
  rating: number;
  comment: string;
  setRating: Dispatch<SetStateAction<number>>;
  setComment: Dispatch<SetStateAction<string>>;
}

export const RateProduct: React.FC<IRateProductProps> = ({
  rating,
  comment,
  setRating,
  setComment,
}): ReactElement => {
  return (
    <Flex className="rate-product__wrapper" flexDirection="column">
      <StarsInput rating={rating} setRating={setRating} />
      <Flex className="rate-product" justifyContent="space-between">
        <TextArea
          id="rate-field"
          name="rate-field"
          text={comment}
          setText={setComment}
        />
        <Button styleGuide="ozon">
          <FaCommentAlt />
        </Button>
      </Flex>
    </Flex>
  );
};
