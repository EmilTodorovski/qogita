import { useContext } from "react";
import { CartContext } from "../../common/cartContext";
import { Product } from "../../common/types";
import { ProductInfo } from "../productInfo";

type AddProductProps = {
  product: Product;
};

export const AddProduct = ({ product }: AddProductProps) => {
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
