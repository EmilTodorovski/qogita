import { useContext } from "react";
import { CartContext } from "../../../common/cartContext";
import { Product } from "../../../common/types";
import { Button } from "../../elements/button";
import { ProductInfo } from "../../productionInfo";
import styles from "./index.module.css";

type AddProductProps = {
  product: Product;
};

export const AddProduct = ({ product }: AddProductProps) => {
  const { cart, editCart } = useContext(CartContext);
  const isAdded = !!cart.find(
    (cartProduct) => cartProduct.gtin === product.gtin
  );
  const buttonText = isAdded ? "Added" : "Add to cart";

  const onAddToCart = () => {
    return editCart({ type: "add", product });
  };

  return (
    <div className={styles.addProduct}>
      <ProductInfo product={product} />
      <div className={styles.addButtonWrapper}>
        <Button onClick={onAddToCart} disabled={isAdded}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
