import { CardProps } from "@/app/types";

export const isItemInCart = (cart: CardProps[], item: CardProps): boolean => {
  return cart.some((cartItem) => cartItem.id === item.id);
};
