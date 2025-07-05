const BASE_URL = "https://dummyjson.com";

const API_ENDPOINTS = {
  PRODUCTS: `${BASE_URL}/products`,
  CARTS: `${BASE_URL}/carts`,
  USERS: `${BASE_URL}/users`,
  AUTH: `${BASE_URL}/auth/login`,
  AUTH_ME: `${BASE_URL}/auth/me`,
  CATEGORIES: `${BASE_URL}/products/category-list`,
  PRODUCTS_BY_CATEGORY: `${BASE_URL}/products/category`,
};

export default API_ENDPOINTS;
