export interface Cart {
  title: string;
  description?: string;
  price: number;
  id: number;
  img: string[];
  count: number;
  category: string;
  discount?: discount;
}

type discount = {
  percentage: number;
  priceAfterDiscount: number;
};
