import { ReactElement, ReactNode } from "react";
import "./style.scss";
import { IProduct } from "@/types/Products";

interface IAddToCartButtonProps {
  children: ReactNode;
  productData: IProduct;
}

export const AddToCartButton: React.FC<IAddToCartButtonProps> = ({
  children,
  productData,
}): ReactElement => {
  return <div onClick={() => console.log(productData)}>{children}</div>;
};
