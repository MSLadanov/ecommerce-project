import { IProduct } from "@/types/Products";
import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

interface ICartItem {
  product: IProduct;
}

export const CartItem: React.FC<ICartItem> = ({ product }): ReactElement => {
    console.log(product)
  return <Flex className="cart-item">{product.brand}</Flex>;
};
