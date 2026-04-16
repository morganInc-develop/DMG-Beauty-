export type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  img: string;
  category: string;
};

export type CartState = {
  items: CartItem[];
};

export const seedCart: CartItem[] = [
  {
    id: "butterfly-cross-bonnet",
    name: "BUTTERFLY\nBONNET",
    variant: "Wrap Style",
    price: 2200,
    quantity: 1,
    img: "/images/bonnet1.jpeg",
    category: "Bonnet",
  },
  {
    id: "push-signature-tee",
    name: "P.U.S.H\nTEE",
    variant: "Standard Fit",
    price: 3500,
    quantity: 1,
    img: "/images/tshirt.jpeg",
    category: "Apparel",
  },
];

export const FREE_SHIPPING_THRESHOLD = 8000;
export const SHIPPING_STANDARD = 699;
export const SHIPPING_EXPRESS = 1499;

export const subtotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
