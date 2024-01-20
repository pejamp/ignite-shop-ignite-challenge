import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { DefaultLayout } from '@/layouts/DefaultLayout'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
