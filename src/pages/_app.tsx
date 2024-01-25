import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { CartProvider } from '@/contexts/CartContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <DefaultLayout>
          <Component {...pageProps} />
      </DefaultLayout>
    </CartProvider>
  )
}
