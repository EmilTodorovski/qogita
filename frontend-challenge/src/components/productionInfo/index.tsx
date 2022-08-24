import { ReactNode } from "react";
import { Product } from "../../common/types";
import styles from "./index.module.css";

type ProductInfoProps = {
  product: Product;
  children?: ReactNode;
};

export const ProductInfo = ({ product, children }: ProductInfoProps) => {
  return (
    <div className={styles.productInfo}>
      <div>
        <div>
          <span className={styles.propertyTitle}>Product name: </span>
          {product.name}
        </div>
        <div>
          <span className={styles.propertyTitle}>Brand: </span>
          {product.brandName}
        </div>
        <div>
          <span className={styles.propertyTitle}>Category: </span>
          {product.categoryName}
        </div>
        <div>
          <span className={styles.propertyTitle}>Single product price: </span>
          {product.recommendedRetailPrice}{" "}
          {product.recommendedRetailPriceCurrency}
        </div>
        {children}
      </div>
      <img className={styles.productImg} src={product.imageUrl} />
    </div>
  );
};
