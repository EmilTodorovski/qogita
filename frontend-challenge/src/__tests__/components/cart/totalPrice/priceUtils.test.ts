import { CartProduct } from "../../../../common/types";
import {
  calculateTotalPrice,
  formatTotalPrice,
} from "../../../../components/cart/totalPrice/priceUtils";

describe("calculateTotalPrice", () => {
  const createProduct = (
    price: number,
    currency: string,
    quantity?: number
  ) => {
    return {
      name: "string",
      gtin: "string",
      recommendedRetailPrice: price,
      recommendedRetailPriceCurrency: currency,
      imageUrl: "string",
      brandName: "string",
      categoryName: "string",
      quantity: quantity ?? 1,
    };
  };
  it("returns empty object when no cart is provided", () => {
    //given
    const cart = [] as CartProduct[];

    //when
    const result = calculateTotalPrice(cart);

    //then
    expect(result).toEqual([]);
  });

  it("returns proper sum when having greater quantity than 1", () => {
    //given
    const cart = [createProduct(1, "EUR"), createProduct(2, "EUR", 2)];

    //when
    const result = calculateTotalPrice(cart);

    //then
    expect(result).toEqual([{ price: 5, currency: "EUR" }]);
  });

  it("returns 2 sums when there are different currencies", () => {
    //given
    const cart = [
      createProduct(1, "EUR"),
      createProduct(2, "EUR", 2),
      createProduct(15, "USD"),
    ];

    //when
    const result = calculateTotalPrice(cart);

    //then
    expect(result).toEqual([
      { price: 5, currency: "EUR" },
      { price: 15, currency: "USD" },
    ]);
  });
});

describe("formatTotalPrice", () => {
  it("returns N/A if no price is provided", () => {
    //given
    const totalPrice = [] as { price: number; currency: string }[];

    //when
    const result = formatTotalPrice(totalPrice);

    //then
    expect(result).toEqual("N/A");
  });

  it("doesnt leave trailing zeroes", () => {
    //given
    const totalPrice = [{ price: 1, currency: "EUR" }];

    //when
    const result = formatTotalPrice(totalPrice);

    //then
    expect(result).toEqual("1 EUR");
  });

  it("formats up to 2 decimals", () => {
    //given
    const totalPrice = [{ price: 1.9931, currency: "EUR" }];

    //when
    const result = formatTotalPrice(totalPrice);

    //then
    expect(result).toEqual("1.99 EUR");
  });

  it("delimits 2 sums with `and`", () => {
    //given
    const totalPrice = [
      { price: 1.9931, currency: "EUR" },
      { price: 5, currency: "USD" },
    ];

    //when
    const result = formatTotalPrice(totalPrice);

    //then
    expect(result).toEqual("1.99 EUR and 5 USD");
  });

  it("delimits 3 or more sums with commas and `and`", () => {
    //given
    const totalPrice = [
      { price: 1.9931, currency: "EUR" },
      { price: 5, currency: "USD" },
      { price: 15, currency: "MKD" },
      { price: 3.5, currency: "SSS" },
    ];

    //when
    const result = formatTotalPrice(totalPrice);

    //then
    expect(result).toEqual("1.99 EUR, 5 USD, 15 MKD and 3.5 SSS");
  });
});
