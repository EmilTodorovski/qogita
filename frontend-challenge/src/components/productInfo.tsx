import { Product } from "../common/types";

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.brandName}</div>
      <div>{product.categoryName}</div>
      <div>
        {product.recommendedRetailPrice}
        {product.recommendedRetailPriceCurrency}
      </div>
    </div>
  );
};
