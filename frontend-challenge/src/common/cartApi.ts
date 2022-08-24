import { Product, ProductsResponse } from "./types";

export const CartApi = {
  getProduct: (productId: number) => {
    return fetch(`/api/products/${productId}`).then(
      (res) => res.json() as Promise<Product>
    );
  },

  getPage: (pageNumber: number) => {
    return fetch(`/api/products?page=${pageNumber}`).then(
      (res) => res.json() as Promise<ProductsResponse>
    );
  },
};
