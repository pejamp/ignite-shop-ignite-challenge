import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { BuyButton, CloseButton, Content, ProductList, ProductsInfo } from './styles'
import { X } from '@phosphor-icons/react'
import { CartItem } from '../CartItem'

export interface CartProps {
  children?: ReactNode
  isCartOpen: boolean
  onCartOpenChange: (value: boolean) => void
}

export function Cart(props: CartProps) {
  return (
    <Dialog.Portal>
    
      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CloseButton>
          <X size={24} weight="bold" />
        </CloseButton>

        <ProductList>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
        </ProductList>

        <ProductsInfo>
          <span>Quantidade</span>
          <span>3 itens</span>
        </ProductsInfo>
        <ProductsInfo textSize={'lg'}>
          <span>Valor total</span>
          <span>R$ 270,00</span>
        </ProductsInfo>

        <BuyButton>Finalizar compra</BuyButton>
      </Content>
    </Dialog.Portal>
  )
}