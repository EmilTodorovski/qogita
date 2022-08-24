import { Product } from "../common/types";

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return <div>{product.brandName}</div>;
};
