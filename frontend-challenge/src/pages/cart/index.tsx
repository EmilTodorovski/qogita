import { useContext } from "react";
import { CartContext } from "../../common/cartContext";
import { EditCartProduct } from "../../components/cart/editCartProduct";
import { TotalPrice } from "../../components/cart/totalPrice";
import { Layout } from "../../components/Layout";

const CartPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <Layout>
      <h1>Your Cart</h1>
      <TotalPrice cart={cart} />
      {cart.map((product) => (
        <EditCartProduct key={product.gtin} product={product} />
      ))}
    </Layout>
  );
};

export default CartPage;
