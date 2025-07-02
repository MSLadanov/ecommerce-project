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
  return <div onClick={() => console.log(productData, cart)}>{children}</div>;
};
