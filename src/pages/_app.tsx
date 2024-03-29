import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import { CartProvider } from "@/contexts/CartContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
