import { ReactNode, useReducer } from "react";
import { CartContext } from "../../common/cartContext";
import { cartInitialState, cartReducer } from "./cartReducer";

type CartContextWrapperProps = {
  children: ReactNode;
};

export const CartContextWrapper = ({ children }: CartContextWrapperProps) => {
  const [state, editCart] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, editCart }}>
      {children}
    </CartContext.Provider>
  );
};
