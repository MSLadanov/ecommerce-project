import { useCookies } from "react-cookie";
import { useApi } from "./useApi";
import { useEffect, useState } from "react";
import { IUser } from "@/types/Users";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { NotifyContext } from "@/contexts/NotifyContext";

export const useAuth = () => {
  const { toggleNotify } = useContext(NotifyContext);
  const navigate = useNavigate();
  const [cookie, , removeCookie] = useCookies(["authToken"]);
  const { get } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState<IUser>(null);
  const clearStorages = () => {
    window.localStorage.removeItem("cart-storage");
    window.localStorage.removeItem("wishlist-storage");
    window.localStorage.removeItem("ordered-storage");
    window.localStorage.removeItem("viewed-storage");
  };
  const clearAuth = () => {
    if (cookie) {
      setTimeout(() => {
        removeCookie("authToken");
        navigate("/products");
        clearStorages();
      }, 3000);
      toggleNotify("success", "You have successfully logged out!");
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
      console.log(error.message);
      setIsError(error.message);
      clearStorages();
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkUserAuth();
  }, [isAuth, cookie.authToken]);

  return { userData, isLoading, isError, clearAuth, isAuth };
};
