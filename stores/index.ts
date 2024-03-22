import { defineStore } from "pinia";
import data from "../data/products.json";
import { type Root } from "../components/type/card";
import { type Cart } from "../components/type/card";

export const productsStore = defineStore({
  id: "products",
  state: () => ({
    products: [] as Root[],
    page: {
      currentPage: 1,
      itemsPerPage: 4,
    },
    currentPage: {},
    cart: [] as Cart[],
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
    totalPrice(): number {
      return this.cart.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
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
    async getProduct(id: number) {
      try {
        const response = await data.products;
        const product = response.find((product) => product.id === id);
        if (product) {
          this.currentPage = product;
          return product;
        } else {
          console.log("Error 404", id);
          return null;
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        return null;
      }
    },
    addToCart(product: Cart) {
      if (this.cart.find((item) => item.id === product.id)) {
        const index = this.cart.findIndex((item) => item.id === product.id);
        this.cart[index].count += 1;
        return;
      } else {
        product.count = 1;
      }
      this.cart.push(product);
    },
    removeFromCart(product: Cart) {
      const index = this.cart.findIndex((item) => item.id === product.id);
      if (this.cart[index].count > 1) {
        this.cart[index].count -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    },
    removeAllFromCart(product: Cart) {
      const index = this.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
  },
});
