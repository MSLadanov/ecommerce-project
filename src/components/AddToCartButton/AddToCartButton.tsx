import { ReactElement, ReactNode } from "react";
import { IProduct } from "@/types/Products";
import { useCart, ICartState } from "@hooks/useCart";
import "./style.scss";

interface IAddToCartButtonProps {
  children: ReactNode;
  productData: IProduct;
}

export const AddToCartButton: React.FC<IAddToCartButtonProps> = ({
  children,
  productData,
}): ReactElement => {
  const { cart } = useCart((state: ICartState) => state);
  console.log(cart);
  return <div onClick={() => console.log(productData)}>{children}</div>;
};
