import { ReactElement } from "react";
import { useAuth } from "@hooks/useAuth";
import { IUser } from "@/types/Users";
import { useApi } from "@hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { ICartResponse } from "@/types/Carts";
import { Flex } from "@components/ui/Flex";
import "./style.scss";

interface IPreviousOrderedCartsProps {
  userData: IUser;
}

const PreviousOrderedCarts: React.FC<IPreviousOrderedCartsProps> = ({
  userData,
}): ReactElement => {
  const { get } = useApi();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["previous-carts"],
    queryFn: () => get<ICartResponse>("CARTS_BY_USER", `/${userData.id}`),
  });
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (!data.carts.length) {
    return <div>No previous carts</div>;
  }
  return (
    <Flex>
      {data.carts.map((cart, index) => (
        <div key={index}>{JSON.stringify(cart)}</div>
      ))}
    </Flex>
  );
};

export const AllUserCarts = (): ReactElement => {
  const { userData, isLoading, isError } = useAuth();
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>{isError}</div>;
  }
  return <PreviousOrderedCarts userData={userData} />;
};
