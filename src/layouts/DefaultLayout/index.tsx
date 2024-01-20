import { ReactNode, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CartButton, Container, Header } from "./styles";
import Image from "next/image";

import logoImg from "@/assets/logo.svg";
import { Cart } from "@/components/Cart";
import { Handbag } from "@phosphor-icons/react";

export interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const full = true

  function handleCartOpenChange(value: boolean) {
    setIsCartOpen(value);
    console.log(value);
  }

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <Dialog.Root open={isCartOpen} onOpenChange={handleCartOpenChange}>
          <Dialog.Trigger asChild>
            <CartButton>
              <Handbag size={24} weight="bold" />
              <span>1</span>
            </CartButton>
          </Dialog.Trigger>

          <Cart isCartOpen={isCartOpen} onCartOpenChange={handleCartOpenChange} />
        </Dialog.Root>
      </Header>
      {props.children}
    </Container>
  );
}
