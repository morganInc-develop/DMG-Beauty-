export type ProductVariant = {
  id: string;
  label: string;
  imageIndex: number;
  note?: string;
};

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
  details: string[];
  variants?: ProductVariant[];
};

export const products: Product[] = [
  {
    id: "butterfly-cross-bonnet",
    name: "Butterfly Cross Bonnet",
    nameLines: ["BUTTERFLY", "BONNET"],
    href: "/shop/bonnets/butterfly-cross-bonnet",
    bg: "#8a0f3d",
    accentBg: "#f6d1de",
    textColor: "#fff8f6",
    category: "Bonnets",
    tags: ["Satin-lined", "4 style options", "Best seller"],
    excerpt:
      "Our signature satin bonnet finished with the DMG butterfly cross mark. Built for bedtime care, travel days, and everyday coverage.",
    price: "$22",
    stories: [
      "/images/bonnet1.jpeg",
      "/images/bonnet.JPG",
      "/images/bonnet2.jpg",
      "/images/bonnet3.jpg",
    ],
    details: [
      "Satin finish helps protect styles overnight and on the go.",
      "The butterfly cross mark keeps the product visually tied to the brand's faith-centered identity.",
      "The current lineup includes multiple bonnet looks without splitting them into separate products.",
    ],
    variants: [
      {
        id: "wrap-style",
        label: "Wrap Style",
        imageIndex: 0,
        note: "Black satin body with blush ties.",
      },
      {
        id: "berry-set",
        label: "Berry Set",
        imageIndex: 1,
        note: "Berry, royal, and pink satin tones.",
      },
      {
        id: "jewel-set",
        label: "Jewel Set",
        imageIndex: 2,
        note: "Bold satin tones packaged for gifting or personal rotation.",
      },
      {
        id: "earth-set",
        label: "Earth Set",
        imageIndex: 3,
        note: "Black, sand, and teal satin options.",
      },
    ],
  },
  {
    id: "push-trucker-hat",
    name: "PUSH Trucker Hat",
    nameLines: ["PUSH", "TRUCKER HAT"],
    href: "/shop/accessories/push-trucker-hat",
    bg: "#d93c2f",
    accentBg: "#fff8f6",
    textColor: "#fff8f6",
    category: "Accessories",
    tags: ["Structured fit", "PUSH graphic", "New arrival"],
    excerpt:
      "Red-and-white trucker hat with the PUSH message front and center for a clean statement piece.",
    price: "$30",
    stories: ["/images/hat.JPG"],
    details: [
      "Easy everyday accessory that pairs naturally with the matching P.U.S.H tee.",
      "Keeps the brand message visible without needing a full layered look.",
      "Works as a grab-and-go reminder piece inside the broader collection.",
    ],
  },
  {
    id: "faith-graphic-hoodie",
    name: "Faith Graphic Hoodie",
    nameLines: ["FAITH", "HOODIE"],
    href: "/shop/clothes/faith-graphic-hoodie",
    bg: "#111111",
    accentBg: "#cba84f",
    textColor: "#fff8f6",
    category: "Apparel",
    tags: ["Pullover", "Faith graphic", "Best seller"],
    excerpt:
      "Black pullover hoodie with a bold front graphic made for cooler nights, travel days, and everyday layering.",
    price: "$58",
    stories: ["/images/hoodie.jpg"],
    details: [
      "Built for the customer who wants the message to stay visible in colder-weather fits.",
      "Dark base and gold print keep it wearable while still making the graphic clear.",
      "Sits naturally beside the tee and hat as part of the apparel side of the catalog.",
    ],
  },
  {
    id: "push-heart-keychain",
    name: "P.U.S.H Heart Keychain",
    nameLines: ["P.U.S.H", "KEYCHAIN"],
    href: "/shop/accessories/push-heart-keychain",
    bg: "#101828",
    accentBg: "#dbe9ff",
    textColor: "#fff8f6",
    category: "Accessories",
    tags: ["Giftable", "Prayer reminder", "Under $20"],
    excerpt:
      "Glossy heart keychain engraved with P.U.S.H: Pray Until Something Happens.",
    price: "$15",
    stories: ["/images/keychain.JPG"],
    details: [
      "Small-format product that still carries one of the strongest messages in the line.",
      "Giftable price point makes it useful for events, bundles, and community giveaways.",
      "The engraving lets the acronym read clearly even at accessory scale.",
    ],
  },
  {
    id: "push-signature-tee",
    name: "P.U.S.H Signature Tee",
    nameLines: ["P.U.S.H", "TEE"],
    href: "/shop/clothes/push-signature-tee",
    bg: "#9f1239",
    accentBg: "#f3d17d",
    textColor: "#fff8f6",
    category: "Apparel",
    tags: ["Statement tee", "P.U.S.H", "New arrival"],
    excerpt:
      "Crimson statement tee built around the P.U.S.H message: Pray Until Something Happens.",
    price: "$35",
    stories: ["/images/tshirt.jpeg", "/images/book-poster.jpg"],
    details: [
      "This piece makes the acronym the lead message instead of a secondary print detail.",
      "The color keeps it bold while the layout stays easy to read from a distance.",
      "Works well as a starting point for customers entering the brand through apparel.",
    ],
  },
];
