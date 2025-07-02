import { ReactElement, ReactNode } from "react";
import { IProduct } from "@/types/Products";
import { useCart, ICartState } from "@hooks/useCart";
import { Flex } from "@components/ui/Flex";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./style.scss";
import { Button } from "../ui/Button";

interface IAddToCartButtonProps {
  children: ReactNode;
  productData: IProduct;
}

interface IInCartControlsProps {
  product: IProduct;
}

const InCartControls: React.FC<IInCartControlsProps> = ({
  product,
}): ReactElement => {
  const { cart, addToCart } = useCart((state: ICartState) => state);
  const countSameIdItems = () => {
    return cart.reduce((acc, item) => {
      if (item.id === product.id) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  };
  return (
    <Flex justifyContent="space-between" className="in-cart-controls">
      <Flex justifyContent="center" alignItems="align-center">
        <Button>
            <FaMinus />
        </Button>
      </Flex>
      <Flex justifyContent="center" alignItems="align-center">
        {countSameIdItems()}
      </Flex>
      <Flex justifyContent="center" alignItems="align-center">
        <Button onClickAction={() => addToCart(product)}>
            <FaPlus />
        </Button>
      </Flex>
    </Flex>
  );
};

export const AddToCartButton: React.FC<IAddToCartButtonProps> = ({
  children,
  productData,
}): ReactElement => {
  const { cart } = useCart((state: ICartState) => state);
  if (cart.find((item) => item.id === productData.id)) {
    return <InCartControls product={productData} />;
  }
  return <div onClick={() => console.log(productData, cart)}>{children}</div>;
};
