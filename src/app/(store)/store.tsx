import { create } from "zustand";
import { CardProps, storeState } from "../types";

const CART_STORAGE_KEY = "cart";

const useCart = create<storeState>((set) => {
  const storedCart = localStorage.getItem(CART_STORAGE_KEY);
  const initialCart = storedCart ? JSON.parse(storedCart) : [];
  return {
    cart: initialCart,
    addItemToCart: (item: CardProps) => {
      set((state) => {
        const newCart = [...state.cart, item];

        // Update local storage after adding item
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      });
    },
    removeItemFromCart: (item) => {
      const { itemIndex } = item;
      set((state) => {
        const newCart = state.cart.filter((element, elementIndex) => {
          return elementIndex !== itemIndex;
        });

        // Update local storage after removing item
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));

        return {
          ...state,
          cart: newCart,
        };
      });
    },
    emptyCart: () => {
      set((state) => {
        const newCart: never[] = [];

        // Update local storage after emptying the cart
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));

        return {
          ...state,
          cart: newCart,
        };
      });
    },
  };
});

export default useCart;
