import { ReactNode, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CartButton, Container, Header } from "./styles";
import Image from "next/image";

import logoImg from "@/assets/logo.svg";
import { Cart } from "@/components/Cart";
import { Handbag } from "@phosphor-icons/react";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";

export interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  const { cartItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  function handleCartOpenChange(value: boolean) {
    setIsCartOpen(value);
  }

  return (
    <Container>
      <Header>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>

        <Dialog.Root open={isCartOpen} onOpenChange={handleCartOpenChange}>
          <Dialog.Trigger asChild>
            <CartButton>
              <Handbag size={24} weight="bold" />
              {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </CartButton>
          </Dialog.Trigger>

          <Cart />
        </Dialog.Root>
      </Header>
      {props.children}
    </Container>
  );
}
