import { CartProduct } from "../../../common/types";
import { calculateTotalPrice, formatTotalPrice } from "./priceUtils";
import styles from "./index.module.css";

type TotalPriceProps = {
  cart: CartProduct[];
};

export const TotalPrice = ({ cart }: TotalPriceProps) => {
  const total = calculateTotalPrice(cart);
  const priceText = formatTotalPrice(total);
  return <div className={styles.totalPrice}>TOTAL PRICE: {priceText}</div>;
};
