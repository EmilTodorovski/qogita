import { useContext } from "react";
import { CartContext } from "../../common/cartContext";
import { EditCartProduct } from "../../components/cart/editCartProduct";
import Layout from "../../components/Layout";

const CartPage = () => {
  const { cart, editCart } = useContext(CartContext);
  return (
    <Layout>
      <h1>Your Cart</h1>
      {cart.map((product) => (
        <EditCartProduct product={product} />
      ))}
    </Layout>
  );
};

export default CartPage;
