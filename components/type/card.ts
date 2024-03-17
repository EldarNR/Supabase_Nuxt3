export interface Root {
  products: Product[];
}

export interface Product {
  title: string;
  description: string;
  price: number;
  id: number;
  img: string[];
}
