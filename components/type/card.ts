

export interface Product {
  title: string;
  description: string;
  price: number;
  id: number;
  img: string[];
  category?: string ;
}

export interface Cart {
  title: string;
  description?: string;
  price: number;
  id: number;
  img: string[];
  count: number;
  category: string;
}
