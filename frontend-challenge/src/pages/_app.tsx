import type { AppProps } from "next/app";
import { CartContextWrapper } from "../components/cartContextWrapper";

import "../global.css";

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <CartContextWrapper>
    <Component {...pageProps} />
  </CartContextWrapper>
);

export default QogitaApp;
