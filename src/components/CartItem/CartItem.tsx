import { IProduct } from "@/types/Products";
import { ReactElement } from "react";
import { Flex } from "@components/ui/Flex";
import { useCart } from "@hooks/useCart";
import { Button } from "@components/ui/Button";
import { FaDollarSign, FaTrash } from "react-icons/fa";
import "./style.scss";

interface ICartItem {
  product: IProduct;
  isCurrentCart: boolean;
}

export const CartItem: React.FC<ICartItem> = ({
  product,
  isCurrentCart,
}): ReactElement => {
  const { removeFromCart } = useCart((state) => state);
  return (
    <Flex className="cart-item" justifyContent="space-between">
      <Flex className="cart-item__info" alignItems="align-center">
        <Flex className="cart-item__image">
          <img src={product.images[0]} />
        </Flex>
        <Flex flexDirection="column">
          <h1>{product.brand ? product.brand : "" + " " + product.title}</h1>
          <Flex className="cart-item__price">
            <h3>
              {product.price} <FaDollarSign />
            </h3>
            <h4>
              {Math.round(
                product.price / (1 - product.discountPercentage / 100)
              )}{" "}
              <FaDollarSign />
            </h4>
          </Flex>
        </Flex>
      </Flex>
      {isCurrentCart && (
        <div className="cart-item__controls">
          <Button onClickAction={() => removeFromCart(product)} styleGuide="wb">
            <FaTrash />
          </Button>
        </div>
      )}
    </Flex>
  );
};
