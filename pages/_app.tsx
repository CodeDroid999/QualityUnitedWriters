import 'tailwindcss/tailwind.css'
import "styles/Navbar.css"
import '../styles/index.css'
import '../styles/custom.css'
import 'styles/bootstrap.css';
import 'styles/custom.css';
import 'styles/index.css';
import 'styles/responsive.css';


import { AppProps } from 'next/app'
import { lazy } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
