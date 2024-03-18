import { defineStore } from "pinia";
import data from "../data/products.json";
import { type Root } from "../components/type/card";

export const productsStore = defineStore({
  id: "products",
  state: () => ({
    products: [] as Root[],
    page: {
      currentPage: 1,
      itemsPerPage: 4,
    },
  }),

  getters: {
    paginatedProducts(): Root[] {
      const startIndex = (this.page.currentPage - 1) * this.page.itemsPerPage;
      const endIndex = startIndex + this.page.itemsPerPage;
      return this.products.slice(startIndex, endIndex);
    },
    totalPages(): number {
      return Math.ceil(this.products.length / this.page.itemsPerPage);
    },
  },
  actions: {
    async fetchProductsFromDB() {
      try {
        const response = await data;
        this.products = response.products as unknown as Root[]; // Cast the response to the expected type
        console.log("response", this.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    setCurrentPage(page: number) {
      this.page.currentPage = page;
    },
  },
});
