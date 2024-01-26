import { ReactNode, createContext, useContext, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

interface ICartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

type CartContextType = {
  cartItems: ICartItem[]
  addToCart: (product: ICartItem) => void
  removeFromCart: (id: string) => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider(props: CartProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  function addToCart(product: ICartItem) {
    setCartItems(prevState => {
      if (prevState.find(item => item.id === product.id) == null) {
        return [...prevState, product]
      } 
      return prevState
    })
  }

  function removeFromCart(id: string) {
    const newCart = cartItems.filter(item => item.id !== id)
    setCartItems(newCart)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{props.children}</CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}