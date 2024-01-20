import Image from "next/image";

import shitImage from '@/assets/1.png'
import { CardContainer, CardImage, CardInfo } from "./styles";

export interface CartItemProps {}

export function CartItem(props: CartItemProps) {
  return (
    <CardContainer>
      <CardImage>
        <Image src={shitImage} alt="" width={105} height={95} />
      </CardImage>

      <CardInfo>
        <span>Camiseta Beyond the Limits</span>
        <strong>R$ 79,90</strong>
        <button>Remover</button>
      </CardInfo>
    </CardContainer>
  )
}