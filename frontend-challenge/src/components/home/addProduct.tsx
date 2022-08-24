import { useContext } from "react";
import { CartContext } from "../../common/cartContext";
import { Product } from "../../common/types";
import { ProductInfo } from "../productInfo";

type AddProductProps = {
  product: Product;
};

export const AddProduct = ({ product }: AddProductProps) => {
  const { cart, editCart } = useContext(CartContext);
  const isAdded = !!cart.find(
    (cartProduct) => cartProduct.gtin === product.gtin
  );
  const buttonText = isAdded ? "Addded" : "Add to cart";

  const onAddToCart = () => {
    return editCart({ type: "add", product });
  };

  return (
    <div>
      <ProductInfo product={product} />
      <button onClick={onAddToCart} disabled={isAdded}>
        {buttonText}
      </button>
    </div>
  );
};
