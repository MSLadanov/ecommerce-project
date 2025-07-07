import { useCookies } from "react-cookie";
import { useApi } from "./useApi";
import { useEffect, useState } from "react";
import { IUser } from "@/types/Users";


export const useAuth = () => {
  const [cookie] = useCookies(["authToken"]);
  const { get } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState<IUser>(null);
  const checkUserAuth = async () => {
    setIsLoading(true);
    try {
      const user : IUser = await get("AUTH_ME", "", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.authToken}`,
        },
      });
      setIsLoading(false);
      setUserData(user);
    } catch (error) {
      setIsError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkUserAuth();
  }, []);

  return { userData, isLoading, isError };
};
