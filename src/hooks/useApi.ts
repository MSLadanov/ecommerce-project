import { TRequestEndpoint } from "@/types/Requests";
import API_ENDPOINTS from "@/api/endpoints";
import axios from "axios";

export const useApi = () => {
  return {
    async get<T>(requestEndPoint: TRequestEndpoint) {
      const { data } = await axios.get<T>(API_ENDPOINTS[requestEndPoint]);
      return data;
    },
    async post() {},
    async update() {},
    async delete() {},
  };
};
