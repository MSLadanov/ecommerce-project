import { UserInfo } from "@components/UserInfo/UserInfo";
import { AllUserCarts } from "@components/AllUserCarts";
import { ReactElement } from "react";

export const UserPage = () : ReactElement => {
  return (
    <main>
      <UserInfo/>
      <AllUserCarts />
    </main>);
};
