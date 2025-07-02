import { ReactElement, ReactNode } from "react";
import { IProduct } from "@/types/Products";
import { useCart, ICartState } from "@hooks/useCart";
import { Flex } from "@components/ui/Flex";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import "./style.scss";

interface IAddToCartButtonProps {
  children: ReactNode;
  productData: IProduct;
}

const InCartControls = (): ReactElement => {
  return (
    <Flex justifyContent="space-between" className="in-cart-controls">
      <Flex justifyContent="center" alignItems="align-center">
        <FaPlus />
      </Flex>
      <Flex justifyContent="center" alignItems="align-center">
        0
      </Flex>
      <Flex justifyContent="center" alignItems="align-center">
        <FaMinus />
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
    return <InCartControls />;
  }
  return <div onClick={() => console.log(productData, cart)}>{children}</div>;
};
