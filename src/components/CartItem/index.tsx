import Image from "next/image";
import { CardContainer, CardImage, CardInfo } from "./styles";
import { formatCurrency } from "@/utils/formatCurrency";
import { useCart } from "@/contexts/CartContext";

interface CartItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
}

export function CartItem({ id, name, image, price }: CartItemProps) {
  const { removeFromCart } = useCart()

  return (
    <CardContainer>
      <CardImage>
        <Image src={image} alt="" width={105} height={95} />
      </CardImage>

      <CardInfo>
        <span>{name}</span>
        <strong>{formatCurrency(price)}</strong>
        <button onClick={() => removeFromCart(id)}>Remover</button>
      </CardInfo>
    </CardContainer>
  )
}