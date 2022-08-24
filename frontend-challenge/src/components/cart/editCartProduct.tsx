import { useContext } from "react";
import { CartContext } from "../../common/cartContext";
import { CartProduct } from "../../common/types";
import { ProductInfo } from "../productInfo";

type EditCartProductProps = {
  product: CartProduct;
};

export const EditCartProduct = ({ product }: EditCartProductProps) => {
  const { cart, editCart } = useContext(CartContext);

  const addButton = () => {
    return editCart({ type: "add", product });
  };

  return (
    <div>
      <ProductInfo product={product} />
      <button onClick={addButton}>ADD ME</button>
    </div>
  );
};
