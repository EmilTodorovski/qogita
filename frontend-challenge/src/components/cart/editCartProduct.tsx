import { useContext } from "react";
import { CartContext } from "../../common/cartContext";
import { CartProduct } from "../../common/types";
import { ProductInfo } from "../productInfo";

type EditCartProductProps = {
  product: CartProduct;
};

export const EditCartProduct = ({ product }: EditCartProductProps) => {
  const { cart, editCart } = useContext(CartContext);

  const onIncrease = () => {
    return editCart({ type: "increase", gtin: product.gtin });
  };

  const onDecrease = () => {
    return editCart({ type: "decrease", gtin: product.gtin });
  };

  return (
    <div>
      <ProductInfo product={product} />
      <button onClick={onDecrease}>-</button>
      {product.quantity}
      <button onClick={onIncrease}>+</button>
    </div>
  );
};
