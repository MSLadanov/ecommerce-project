import { TRequestEndpoint } from "@/types/Requests";
import API_ENDPOINTS from "@/api/endpoints";
import axios from "axios";

export const useApi = () => {
  return {
    async get<T>(requestEndpoint: TRequestEndpoint) {
      const { data } = await axios.get<T>(API_ENDPOINTS[requestEndpoint]);
      return data;
    },
    async post<T>(requestEndpoint: TRequestEndpoint, body) {
      const { data } = await axios.post<T>(
        API_ENDPOINTS[requestEndpoint],
        body
      );
      return data;
    },
    async update() {},
    async delete() {},
  };
};
