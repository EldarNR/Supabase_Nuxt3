import { defineStore } from "pinia";
import data from "../data/products.json";
import { type Cart } from "../components/type/card";

export const productsStore = defineStore({
  id: "products",
  state: () => ({
    products: [] as Cart[],
    banner: [] as Cart[],
    page: {
      currentPage: 1,
      itemsPerPage: 4,
    },
    currentPage: {},
    cart: [] as Cart[],
  }),

  getters: {
    paginatedProducts(): Cart[] {
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
    Discount(): number {
      return this.totalPrice * 0.1;
    },
    VAT(): number {
      return this.totalPrice * 0.2;
    },
    grandTotal(): number {
      return this.totalPrice + this.VAT;
    },
  },
  actions: {
    async fetchProductsFromDB() {
      try {
        const response = await data;
        this.products = response.products as unknown as Cart[];

        this.productforBanner();
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    },
    async productforBanner() {
      const productsWithDiscount = await this.products.filter(
        (item) => item.discount !== undefined
      );
      if (productsWithDiscount.length >= 2) {
        const index1 = Math.floor(Math.random() * productsWithDiscount.length);
        let index2;
        do {
          index2 = Math.floor(Math.random() * productsWithDiscount.length);
        } while (index1 === index2);
        this.banner = [
          productsWithDiscount[index1],
          productsWithDiscount[index2],
        ];
      } else {
        this.banner = [...productsWithDiscount];
      }
    },
    setCurrentPage(page: number) {
      this.page.currentPage = page;
    },

    async searchProducts(search: string) {
      try {
        const response = await data.products;
        this.products = response.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        ) as unknown as Cart[];
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async sortPrice(minPrice: number, maxPrice: number) {
      try {
        const response = await data.products;
        // Фильтруем товары по цене в заданном диапазоне
        const filteredProducts = response.filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
        if (filteredProducts.length) {
          this.products = filteredProducts as unknown as Cart[];
        } else {
          return "No products found in the specified price range.";
        }
        return filteredProducts;
      } catch (error) {
        console.error("Error filtering products:", error);
      }
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
    async filterByCategory(category: string[]) {
      try {
        const fetchProducts = (await data.products) as Cart[];
        const filteredProducts = fetchProducts.filter((product) =>
          category.includes(product.category as string)
        );
        if (filteredProducts.length) {
          this.products = filteredProducts;
        } else {
          return "No products found in the specified category.";
        }
      } catch (error) {
        console.error("Error filtering products:", error);
        throw error;
      }
    },
    sortPriceMax() {
      this.products.sort((a, b) => b.price - a.price);
    },
    sortPriceMin() {
      this.products.sort((a, b) => a.price - b.price);
    },
  },
});
