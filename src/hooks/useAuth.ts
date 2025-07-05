import { useCookies } from "react-cookie";
import { useApi } from "./useApi";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [cookie] = useCookies(["authToken"]);
  const { get } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    try {
      const user = get("AUTH_ME", "", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.authToken}`,
        },
      });
      setIsLoading(false);
      setUserData(user);
    } catch (error) {
      console.log(error);
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  }, [cookie.authToken, get, userData]);

  return { userData, isLoading, isError };
};
