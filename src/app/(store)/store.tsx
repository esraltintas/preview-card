import { create } from "zustand";
import { CardProps, storeState } from "../types";

const useCart = create<storeState>((set) => ({
  cart: [],
  addItemToCart: (item: CardProps) => {
    set((state) => ({ cart: [...state.cart, item] }));
  },
  removeItemFromCart: (item) => {
    const { itemIndex } = item;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex;
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },
  emptyCart: () => {
    set((state) => {
      const newCart: never[] = [];
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

export default useCart;
