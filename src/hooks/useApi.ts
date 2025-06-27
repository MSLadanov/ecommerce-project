import { TRequestEndpoint } from "@/types/Requests";
import API_ENDPOINTS from "@/api/endpoints";
import axios from "axios";

export const useApi = () => {
  return {
    async get<T>(requestEndpoint: TRequestEndpoint, queryParam: string = "") {
      const { data } = await axios.get<T>(
        API_ENDPOINTS[requestEndpoint] + queryParam
      );
      return data;
    },
    async post<T>(requestEndpoint: TRequestEndpoint, body, notifyToggler) {
      try {
        const request = await axios.post<T>(
          API_ENDPOINTS[requestEndpoint],
          body
        );
        return request.data;
      } catch (error) {
        console.log(error)
        notifyToggler('error', error.message);
      }
    },
    async update() {},
    async delete() {},
  };
};
