import { ReactElement } from "react";
import { IReview } from "@/types/Products";
import "./style.scss";

export const ProductReview : React.FC<{review : IReview}> = ({review}): ReactElement => {
  return <div>{review.comment}</div>;
};
