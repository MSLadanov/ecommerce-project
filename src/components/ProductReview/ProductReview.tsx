import { ReactElement } from "react";
import { IReview } from "@/types/Products";
import { Flex } from "@components/ui/Flex";
import { FaStar } from "react-icons/fa";
import { format } from "date-fns";
import "./style.scss";

export const ProductReview: React.FC<{ review: IReview }> = ({
  review,
}): ReactElement => {
  return (
    <div className="product-review">
      <Flex className="product-review__header" justifyContent="space-between">
        <Flex>
          <h4>{review.reviewerName}</h4>
          <h6>{format(Date.parse(review.date), "PP")}</h6>
        </Flex>
        <Flex>
          {new Array(review.rating).fill("").map((_, index) => (
            <FaStar key={index} />
          ))}
        </Flex>
      </Flex>
      <Flex className="product-review__body">{review.comment}</Flex>
    </div>
  );
};
