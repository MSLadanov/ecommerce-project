import { TRequestEndpoint } from "@/types/Requests";
import API_ENDPOINTS from "@/api/endpoints";
import axios, { AxiosRequestConfig } from "axios";

export const useApi = () => {
  return {
    async get<T>(
      requestEndpoint: TRequestEndpoint,
      queryParam: string = "",
      config?: AxiosRequestConfig
    ) {
      const { data } = await axios.get<T>(
        API_ENDPOINTS[requestEndpoint] + queryParam,
        config
      );
      return data;
    },
    async post<T>(
      requestEndpoint: TRequestEndpoint,
      body: {
        [key: string]: string | number;
      },
      notifyToggler: (type: string, message: string) => void,
      config?: AxiosRequestConfig
    ) {
      try {
        const request = await axios.post<T>(
          API_ENDPOINTS[requestEndpoint],
          body,
          config
        );
        return request.data;
      } catch (error) {
        notifyToggler("error", error.response.data.message);
      }
    },
    async update() {},
    async delete() {},
  };
};
