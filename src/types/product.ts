export type ProductType = {
  cant: number;
  id: number;
  description: string;
  slug: string;
  images: [string];
  price: number;
  title: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
};
