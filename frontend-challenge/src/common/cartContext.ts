import { createContext, Dispatch } from "react";
import { CartContextAction } from "../components/cartContextWrapper/cartReducer";
import { CartProduct } from "./types";

export type CartContextType = {
  cart: CartProduct[];
  editCart: Dispatch<CartContextAction>;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  editCart: () => {},
});
