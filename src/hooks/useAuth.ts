import { useCookies } from "react-cookie";
import { useApi } from "./useApi";
import { useEffect, useState } from "react";
import { IUser } from "@/types/Users";

export const useAuth = () => {
  const [cookie, , removeCookie] = useCookies(["authToken"]);
  const { get } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState<IUser>(null);
  const clearAuth = () => {
    if (cookie) {
      removeCookie("authToken");
    }
  };
  const checkUserAuth = async () => {
    setIsLoading(true);
    try {
      const user: IUser = await get("AUTH_ME", "", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.authToken}`,
        },
      });
      setIsLoading(false);
      setUserData(user);
      setIsAuth(true);
    } catch (error) {
      setIsAuth(false);
      setIsError(error.response.data.message);
    } finally {
      setIsAuth(false);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkUserAuth();
  }, [isAuth]);

  return { userData, isLoading, isError, clearAuth, isAuth };
};
