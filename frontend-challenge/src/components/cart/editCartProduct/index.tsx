import { useContext } from "react";
import { CartContext } from "../../../common/cartContext";
import { CartProduct } from "../../../common/types";
import { Button } from "../../elements/button";
import { ProductInfo } from "../../productionInfo";
import styles from "./index.module.css";
import productInfoStyles from "../../productionInfo/index.module.css";

type EditCartProductProps = {
  product: CartProduct;
};

export const EditCartProduct = ({ product }: EditCartProductProps) => {
  const { editCart } = useContext(CartContext);
  const decreaseDisabled = product.quantity == 1;
  const totalPrice = (
    product.recommendedRetailPrice * product.quantity
  ).toFixed(2);

  const onIncrease = () => {
    return editCart({ type: "increase", gtin: product.gtin });
  };

  const onDecrease = () => {
    return editCart({ type: "decrease", gtin: product.gtin });
  };

  const onRemove = () => {
    return editCart({ type: "remove", gtin: product.gtin });
  };

  return (
    <div className={styles.editCartProduct}>
      <ProductInfo product={product}>
        <div>
          <span className={productInfoStyles.propertyTitle}>Total price: </span>
          {totalPrice} {product.recommendedRetailPriceCurrency}
        </div>
      </ProductInfo>
      <div className={styles.buttons}>
        <div className={styles.buttonWrapper}>
          <div>Quantity:</div>
          <div>
            <Button
              onClick={onDecrease}
              roundedFull
              disabled={decreaseDisabled}
            >
              -
            </Button>
            {product.quantity}
            <Button onClick={onIncrease} roundedFull>
              +
            </Button>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button onClick={onRemove}>Remove</Button>
        </div>
      </div>
    </div>
  );
};
