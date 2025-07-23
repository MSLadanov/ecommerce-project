import { ReactElement } from "react";
import { useAuth } from "@hooks/useAuth";
import { IUser } from "@/types/Users";
import { useApi } from "@hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { ICart, ICartResponse } from "@/types/Carts";
import { Flex } from "@components/ui/Flex";
import { CartItem } from "@components/CartItem";
import { Loader } from "@components/Loader";
import { EmptyOrders } from "@components/EmptyOrders";
import { CollapseBox } from "@components/ui/CollapseBox";
import { IProduct } from "@/types/Products";
import "./style.scss";

interface IPreviousOrderedCartsProps {
  userData: IUser;
}

interface IPreviousOrderedCartProps {
  cart: ICart;
}

const PreviousOrderedCart: React.FC<IPreviousOrderedCartProps> = ({ cart }) => {
  return (
    <Flex className="previous-ordered__cart" flexDirection="column">
      {cart.products.map((product : IProduct) => (
        <CartItem
          key={product.cart_id}
          product={product}
          isCurrentCart={false}
        />
      ))}
    </Flex>
  );
};

const PreviousOrderedCarts: React.FC<IPreviousOrderedCartsProps> = ({
  userData,
}): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["previous-carts"],
    queryFn: () => get<ICartResponse>("CARTS_BY_USER", `/${userData.id}`),
  });
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (!data.carts.length) {
    return <EmptyOrders />;
  }
  return (
    <Flex className="previous-ordered" flexDirection="column">
      {data.carts.map((cart) => (
        <PreviousOrderedCart key={cart.id} cart={cart} />
      ))}
    </Flex>
  );
};

export const AllUserCarts = (): ReactElement => {
  const { userData, isLoading, isError } = useAuth();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>{isError}</div>;
  }
  return (
    <CollapseBox title="Order History">
      <PreviousOrderedCarts userData={userData} />
    </CollapseBox>
  );
};
