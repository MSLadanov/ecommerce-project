import { useCookies } from "react-cookie";
import { useApi } from "./useApi";
import { useState } from "react";

export const useAuth = () => {
  const [cookie] = useCookies(["authToken"]);
  const { get } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userData, setUserData] = useState(null);
};
