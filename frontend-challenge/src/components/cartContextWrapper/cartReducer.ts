import { CartProduct, Product } from "../../common/types";

type AddAction = {
  type: "add";
  product: Product;
};

type EditAction = {
  type: "remove" | "increase" | "decrease";
  gtin: string;
};

export type CartContextAction = AddAction | EditAction;

export const cartInitialState = {
  cart: [] as CartProduct[],
};
export const cartReducer = (
  state: typeof cartInitialState,
  action: CartContextAction
) => {
  let newCart = [...state.cart];
  let index;
  let existingProduct;
  let newProduct;

  switch (action.type) {
    case "add":
      existingProduct = newCart.find(
        (cartProduct) => cartProduct.gtin === action.product.gtin
      );
      if (!existingProduct) {
        newCart.push({
          quantity: 1,
          ...action.product,
        });
      }
      return { cart: newCart };
    case "increase":
      existingProduct = newCart.find(
        (cartProduct) => cartProduct.gtin === action.gtin
      );
      if (existingProduct) {
        index = newCart.indexOf(existingProduct);
        newProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
        newCart[index] = newProduct;
      }
      return { cart: newCart };
    case "decrease":
      existingProduct = newCart.find(
        (cartProduct) => cartProduct.gtin === action.gtin
      );
      if (existingProduct) {
        index = newCart.indexOf(existingProduct);
        if (existingProduct.quantity > 1) {
          newProduct = {
            ...existingProduct,
            quantity: existingProduct.quantity - 1,
          };
          newCart[index] = newProduct;
        } else {
          newCart.splice(index, 1);
        }
      }
      return { cart: newCart };
    case "remove":
      existingProduct = newCart.find(
        (cartProduct) => cartProduct.gtin === action.gtin
      );
      if (existingProduct) {
        index = newCart.indexOf(existingProduct);
        newCart.splice(index, index);
      }
      return { cart: newCart };
  }
};
