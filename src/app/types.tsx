export interface CardProps {
  id: number;
  name: string;
  image: string;
  price_per_ton: number;
  country: string;
  offered_volume_in_tons: number;
  distribution_weight: number;
  supplier_name: string;
  earliest_delivery: string;
  description: string;
}

export interface storeState {
  cart: CardProps[];
  addItemToCart: (item: CardProps) => void;
  removeItemFromCart: (item: { itemIndex: number }) => void;
  emptyCart: () => void;
}

export interface ButtonProps {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}
