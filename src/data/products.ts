export type Product = {
  id: string;
  name: string;
  nameLines: string[];
  href: string;
  bg: string;
  accentBg: string;
  textColor: string;
  category: string;
  tags: string[];
  excerpt: string;
  price: string;
  stories: string[];
};

export const products: Product[] = [
  {
    id: "rose-satin",
    name: "Rose Satin",
    nameLines: ["ROSE", "SATIN"],
    href: "/shop/bonnets/rose-satin",
    bg: "#db3c8a",
    accentBg: "#fff8f6",
    textColor: "#fff8f6",
    category: "Bonnets",
    tags: ["Bonnet", "Satin-lined", "New arrival"],
    excerpt:
      "Our bestselling satin bonnet in dusty rose. Fully lined, adjustable band, curl-protective.",
    price: "$28",
    stories: [
      "/images/shop/rose-satin-1.jpg",
      "/images/shop/rose-satin-2.jpg",
      "/images/shop/rose-satin-3.jpg",
    ],
  },
  {
    id: "smoke-black",
    name: "Smoke Black",
    nameLines: ["SMOKE", "BLACK"],
    href: "/shop/bonnets/smoke-black",
    bg: "#6b5200",
    accentBg: "#f29ebd",
    textColor: "#fff8f6",
    category: "Bonnets",
    tags: ["Bonnet", "Satin-lined", "Limited"],
    excerpt:
      "A deep charcoal bonnet with a matte finish. Limited run, styled for everyday protection.",
    price: "$28",
    stories: [
      "/images/shop/smoke-black-1.jpg",
      "/images/shop/smoke-black-2.jpg",
      "/images/shop/smoke-black-3.jpg",
    ],
  },
  {
    id: "cream-ribbed",
    name: "Cream Ribbed",
    nameLines: ["CREAM", "RIBBED"],
    href: "/shop/clothes/cream-ribbed",
    bg: "#fce5df",
    accentBg: "#db3c8a",
    textColor: "#3d2b00",
    category: "Clothes",
    tags: ["Top", "XS – 4X", "Bestseller"],
    excerpt:
      "A heavyweight ribbed crop top in warm cream. Stretchy, breathable, and made to last.",
    price: "$42",
    stories: [
      "/images/shop/cream-ribbed-1.jpg",
      "/images/shop/cream-ribbed-2.jpg",
      "/images/shop/cream-ribbed-3.jpg",
    ],
  },
  {
    id: "black-joggers",
    name: "Black Joggers",
    nameLines: ["BLACK", "JOGGERS"],
    href: "/shop/clothes/black-joggers",
    bg: "#8b5800",
    accentBg: "#fce5df",
    textColor: "#fff8f6",
    category: "Clothes",
    tags: ["Bottoms", "XS – 4X", "Fan favorite"],
    excerpt:
      "High-waist joggers with a tapered fit. Soft French terry that matches everything.",
    price: "$58",
    stories: [
      "/images/shop/black-joggers-1.jpg",
      "/images/shop/black-joggers-2.jpg",
      "/images/shop/black-joggers-3.jpg",
    ],
  },
  {
    id: "gold-hoop-set",
    name: "Gold Hoop Set",
    nameLines: ["GOLD", "HOOP SET"],
    href: "/shop/accessories/gold-hoops",
    bg: "#e59c01",
    accentBg: "#3d2b00",
    textColor: "#fff8f6",
    category: "Accessories",
    tags: ["Earrings", "Set of 3", "Gold-plated"],
    excerpt:
      "Three sizes, one vibe. Gold-plated stainless steel with a finish that keeps shining.",
    price: "$18",
    stories: [
      "/images/shop/gold-hoops-1.jpg",
      "/images/shop/gold-hoops-2.jpg",
      "/images/shop/gold-hoops-3.jpg",
    ],
  },
];
