import { createClient } from "@supabase/supabase-js";
import { defineStore } from "pinia";

import data from "../data/products.json";
import { type Cart } from "../components/type/card";
import { type favourite } from "~/components/type/favourite";

var url =
  process.env.SUPABASE_URL || "https://jzkasefbtoupjkvkluyf.supabase.co";
var key =
  process.env.SUPABASE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6a2FzZWZidG91cGprdmtsdXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk5OTQzMDIsImV4cCI6MjAyNTU3MDMwMn0.HBJ0_hh5X0bqqqb5-IC_EQg4b_vmUMuwCP3YmDlZ14I";
export const productsStore = defineStore({
  id: "products",
  state: () => ({
    products: [] as Cart[],
    banner: [] as Cart[],
    carusel: [] as Cart[],
    page: {
      currentPage: 1,
      itemsPerPage: 12,
    },
    currentPage: {},
    cart: [] as Cart[],
    deliveryInfo: {},
    favourite: [] as favourite[] | null,

    loading: {
      products: false,
    },
  }),

  getters: {
    paginatedProducts(): Cart[] {
      const startIndex = (this.page.currentPage - 1) * this.page.itemsPerPage;
      const endIndex = startIndex + this.page.itemsPerPage;
      return this.ProductswithFavourite.slice(startIndex, endIndex); // Используем favouriteProducts для пагинации
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
    ProductswithFavourite(): Cart[] {
      return this.products.map((product) => {
        const isFavourite =
          this.favourite?.some((fav) => fav.product_id === product.id) ?? false;
        return { ...product, favourite: isFavourite };
      });
    },
  },
  actions: {
    async fetchProductsFromDB() {
      try {
        const response = await data;
        console.log(response);
        this.products = response.products as Cart[];
        this.carusel = response.products.slice(0, 3) as Cart[];
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
        ) as Cart[];
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
    getDelivery(obj: object) {
      this.deliveryInfo = obj;
    },

    async postMessage() {
      const config = useRuntimeConfig();
      const supabase = createClient(url as string, key as string);
      // Проверка данных доставки на пустоту
      if (!this.deliveryInfo || Object.keys(this.deliveryInfo).length === 0) {
        console.error(
          "Пожалуйста, заполните информацию о доставке перед отправкой заказа."
        );
        return; // Прервать выполнение функции, если данные пусты
      }
      try {
        const { data, error } = await supabase
          .from("order")
          .insert(this.deliveryInfo);

        console.log("Данные успешно отправлены в Supabase:", data);
      } catch (e) {
        console.error("Неожиданная ошибка:", e);
      }
    },
    async postProductFav(idProduct: number) {
      const config = useRuntimeConfig();
      const supabase = createClient(url as string, key as string);

      // Get the current user ID from Supabase auth
      const user = supabase.auth.getUser();

      if (!user) {
        console.error(
          "Необходимо войти в систему, чтобы добавить продукт в избранные."
        );
        return; // Prevent further execution if not logged in
      }

      const { data, error } = await supabase
        .from("favourite") // Replace with your favorites table name
        .insert({
          user_uid: (await user).data.user?.id, // Add user ID to the data
          product_id: idProduct,
        });

      if (error) {
        console.error("Ошибка при добавлении продукта в избранное:", error);
        // Handle errors more specifically (e.g., display user-friendly messages)
      } else {
        console.log("Продукт успешно добавлен в избранное:", data);
        // Handle success (e.g., show confirmation message)
      }
    },
    async getFavProduct() {
      const config = useRuntimeConfig();
      const supabase = createClient(url as string, key as string);
      // Get the current user ID from Supabase auth
      const user = supabase.auth.getUser();
      try {
        let { data: favourite, error } = await supabase
          .from("favourite")
          .select("*")
          .eq("user_uid", (await user).data.user?.id);

        if (error) {
          console.error("Ошибка:", error);
          // Handle errors more specifically (e.g., display user-friendly messages)
        } else {
          console.log("Продукт был успешно принят", favourite);
          this.favourite = favourite;
        }
      } catch (e) {
        console.error("ошибка запроса!", e);
      } finally {
        this.loading.products = true;
      }
    },
    async deleteFavProduct(idProduct: number) {
      const config = useRuntimeConfig();
      const supabase = createClient(url as string, key as string);

      const { error } = await supabase
        .from("favourite")
        .delete()
        .eq("product_id", idProduct);

      if (error) {
        console.error("Ошибка:", error);
        // Handle errors more specifically (e.g., display user-friendly messages)
      } else {
        console.log("Продукт был удаленно");
      }
    },
    mergeProducts() {
      // Create a new array to store the merged objects
      const mergedProducts: any[] = [];

      // Iterate through the cart array
      this.cart.forEach((product) => {
        // Create a new object with the product's id, count, and deliveryInfo
        const mergedProduct = {
          product_id: product.id,
          quality: product.count,
          ...this.deliveryInfo, // Spread deliveryInfo properties
        };

        console.log(mergedProduct);

        // Add the merged product to the mergedProducts array
        mergedProducts.push(mergedProduct);
      });

      this.deliveryInfo = mergedProducts[0];
    },
  },
});
