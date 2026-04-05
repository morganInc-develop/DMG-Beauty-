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
    id: "rose-satin",
    name: "ROSE\nSATIN",
    variant: "Bonnet — One size",
    price: 2800,
    quantity: 1,
    img: "/images/shop/rose-satin-1.jpg",
    category: "Bonnet",
  },
  {
    id: "cream-ribbed",
    name: "CREAM\nRIBBED",
    variant: "Top — Size M",
    price: 4200,
    quantity: 2,
    img: "/images/shop/cream-ribbed-1.jpg",
    category: "Clothes",
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
