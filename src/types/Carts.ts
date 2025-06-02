export type TCart = {
  id: number;
  userId: number;
  date: string;
  products: [
    { productId: number; quantity: number },
    { productId: number; quantity: number },
    { productId: number; quantity: number }
  ];
};
