import { useCookies } from "react-cookie";
import { useApi } from "./useApi";
import { useEffect, useState } from "react";
import { IUser } from "@/types/Users";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const navigate = useNavigate()
  const [cookie, , removeCookie] = useCookies(["authToken"]);
  const { get } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState<IUser>(null);
  const clearAuth = () => {
    if (cookie) {
      removeCookie("authToken");
      navigate("/products")
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
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkUserAuth();
  }, [isAuth, cookie.authToken]);

  return { userData, isLoading, isError, clearAuth, isAuth };
};
