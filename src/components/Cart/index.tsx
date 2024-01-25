import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  BuyButton,
  CloseButton,
  Content,
  EmptyBox,
  ProductList,
  ProductsInfo,
} from "./styles";
import { X } from "@phosphor-icons/react";
import { CartItem } from "../CartItem";
import { useCart } from "@/contexts/CartContext";
import { formatCurrency } from "@/utils/formatCurrency";
import axios from "axios";

export interface CartProps {}

export function Cart(props: CartProps) {
  const { cartItems } = useCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const totalAmount = cartItems.reduce((amount, product) => {
    return (amount += product.price);
  }, 0);

  const isCartEmpty = cartItems.length === 0;
  console.log(cartItems.map((item) => item.price));

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <Dialog.Portal>
      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        {isCartEmpty ? (
          <EmptyBox>
            <span>Nenhum produto foi selecionado.</span>
          </EmptyBox>
        ) : (
          <ProductList>
            {cartItems.map((item) => (
              <li key={item.id}>
                <CartItem
                  id={item.id}
                  name={item.name}
                  image={item.imageUrl}
                  price={item.price}
                />
              </li>
            ))}
          </ProductList>
        )}

        <ProductsInfo>
          <span>Quantidade</span>
          <span>{cartItems.length} itens</span>
        </ProductsInfo>
        <ProductsInfo textSize={"lg"}>
          <span>Valor total</span>
          <span>{formatCurrency(totalAmount)}</span>
        </ProductsInfo>

        <BuyButton
          disabled={isCartEmpty || isCreatingCheckoutSession}
          onClick={handleBuyButton}
        >
          Finalizar compra
        </BuyButton>
      </Content>
    </Dialog.Portal>
  );
}
