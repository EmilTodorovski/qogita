import { Pagination } from "@mui/material";
import { useEffect, useReducer } from "react";
import { CartApi } from "../../common/cartApi";
import { ComponentState } from "../../common/componentState";
import { PAGE_SIZE } from "../../common/consts";
import { makeReducer } from "../../common/reducer";
import { Product } from "../../common/types";
import { AddProduct } from "./addProduct";

export const ProductsSelection = () => {
  const initialState = {
    products: [] as Product[],
    componentState: ComponentState.LOADING,
    page: 1,
    maxPage: 1,
  };

  const [{ products, componentState, page, maxPage }, dispatch] = useReducer(
    makeReducer<typeof initialState>(),
    initialState
  );

  const fetchProducts = () => {
    dispatch({ componentState: ComponentState.LOADING });
    CartApi.getPage(page)
      .then((response) => {
        dispatch({
          products: response.results,
          componentState: ComponentState.SUCCESS,
          maxPage: Math.ceil(response.count / PAGE_SIZE),
        });
      })
      .catch((error) => {
        //TODO display the error in a toaster here
        dispatch({ componentState: ComponentState.ERROR });
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const onPageChange = (_args: any, newPage: number) => {
    dispatch({ page: newPage });
  };

  if (componentState === ComponentState.ERROR) {
    return <>ERROR STATE</>;
  }

  if (componentState === ComponentState.LOADING) {
    return <>LOADING STATE</>;
  }

  if (products.length === 0) {
    return <>EMPTY STATE</>;
  }

  return (
    <>
      <span>
        {products.map((product) => (
          <AddProduct product={product} />
        ))}
      </span>
      <Pagination count={maxPage} page={page} onChange={onPageChange} />
    </>
  );
};
