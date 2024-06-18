export type Menu = {
  id: string;
  name: string;
  image: string;
  items: Array<MenuItem>;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
