import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "05e9651d-528e-4d7c-a60b-bae8f09684c6";

export function getProducts() {
  return http.get(apiEndpoint);
}

const productService = {
  getProducts,
};

export default productService;
