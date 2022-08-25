import { CartProduct } from "../../../common/types";

type TotalSum = { price: number; currency: string }[];

/**
 * Returns the total price for all of the products in the cart. Returns an array of currency and price couples,
 * as there might be more than one currency in the dataset.
 * Returns empty array if no products are provided.
 */
export const calculateTotalPrice = (cart: CartProduct[]) => {
  const initialValue = [] as TotalSum;
  const total = cart.reduce((sums, product) => {
    const productTotalPrice = product.quantity * product.recommendedRetailPrice;
    const existingSum = sums.find(
      (sum) => sum.currency === product.recommendedRetailPriceCurrency
    );
    if (!existingSum) {
      const newSum = {
        price: productTotalPrice,
        currency: product.recommendedRetailPriceCurrency,
      };
      return [...sums, newSum];
    } else {
      existingSum.price += productTotalPrice;
      return sums;
    }
  }, initialValue);
  return total;
};

const replaceLast = (text: string, toReplace: string, replaceWith: string) => {
  const index = text.lastIndexOf(toReplace);
  if (index === -1) {
    return text;
  }
  return (
    text.substring(0, index) +
    replaceWith +
    text.substring(index + toReplace.length, text.length)
  );
};

export const formatTotalPrice = (totalSum: TotalSum) => {
  if (totalSum.length === 0) {
    return "N/A";
  }
  let commaDelimited = totalSum
    .map((sum) => `${parseFloat(sum.price.toFixed(2))} ${sum.currency}`)
    .join(", ");
  const lastComma = commaDelimited.lastIndexOf(", ");
  if (lastComma !== -1) {
    commaDelimited = replaceLast(commaDelimited, ", ", " and ");
  }
  return commaDelimited;
};
