import { defineStore } from "pinia";
import review from "~/data/review.json";

export type Review = {
  id: number;
  name: string;
  review: string;
  star: number;
  picture: string;
  price?: number;
};

export const reviews = defineStore({
  id: "review",
  state: () => ({
    reviews: [] as Review[],
  }),

  actions: {
    async fetchReviews() {
      try {
        const response = await review;
        this.reviews = response as unknown as Review[];
        console.log("review", this.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
      }
    },
  },
});
