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
        if (error.response) {
          return error.response.data.message;
        } else {
          return error.message;
        }
      }
    },
    async update<T>(
      requestEndpoint: TRequestEndpoint,
      queryParam: string = "",
      body: {
        [key: string]: string | number | Array<object>;
      },
      notifyToggler?: (type: string, message: string) => void,
      config?: AxiosRequestConfig
    ) {
      try {
        const request = await axios.put<T>(
          API_ENDPOINTS[requestEndpoint] + queryParam,
          body,
          config
        );
        return request.data;
      } catch (error) {
        notifyToggler("error", error.response.data.message);
      }
    },
  };
};
