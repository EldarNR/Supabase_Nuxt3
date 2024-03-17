import { defineStore } from "pinia";
import data from "../data/products.json";
import { type Root } from "~/components/type/card";

export const productsStore = defineStore("products", {
  state: () => ({
    products: [] as Root[],
    cart: [] as Root[],
  }),
  actions: {
    async fetchProductsFromDB(): Promise<void> {
      try {
        const products = await data;
        this.products = [products]; // Update the type to an array of objects
        console.log("response", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
