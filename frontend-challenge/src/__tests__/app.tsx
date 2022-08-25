// __tests__/index.test.jsx

import { act, render, screen } from "@testing-library/react";
import HomePage from "../pages/index";
import "@testing-library/jest-dom";
import products from "../../data/products.json";
import { CartContextWrapper } from "../components/cartContextWrapper";

//This should be properly mocked, not just reusing the data from the BE
const mockProducts = products;
jest.mock("../common/cartApi", () => {
  return {
    CartApi: {
      getPage: (pageNumber: number) => {
        const results =
          pageNumber == 1
            ? mockProducts.slice(0, 20)
            : mockProducts.slice(20, 25);
        return Promise.resolve({
          count: 25,
          page: pageNumber,
          results: results,
        });
      },
    },
  };
});

describe("Home", () => {
  it("initial test - checks whether the title is rendered", async () => {
    await act(async () => {
      render(<HomePage />);
    });

    const productElements = screen.getAllByText("Products");

    expect(productElements.length).toBeGreaterThanOrEqual(1);
  });

  it("should show 25 products in 2 pages", async () => {
    await act(async () => {
      render(<HomePage />);
    });

    let productElements = screen.getAllByText("Add to cart");
    expect(productElements.length).toBe(20);

    const page2 = screen.getByLabelText("Go to page 2");
    await act(async () => {
      page2.click();
    });

    productElements = screen.getAllByText("Add to cart");
    expect(productElements.length).toBe(5);

    const page3 = screen.queryByLabelText("Go to page 3");
    expect(page3).not.toBeInTheDocument();
  });

  it("should add items to cart and disable the buttons", async () => {
    await act(async () => {
      render(
        <CartContextWrapper>
          <HomePage />
        </CartContextWrapper>
      );
    });

    let productElements = screen.getAllByText("Add to cart");
    await act(async () => {
      productElements[0].click();
    });
    await act(async () => {
      productElements[1].click();
    });

    let addedToCart = screen.getAllByText("Added");

    expect(addedToCart.length).toBe(2);
    expect(addedToCart[0]).toHaveAttribute("disabled");
    expect(addedToCart[1]).toHaveAttribute("disabled");
  });
});
