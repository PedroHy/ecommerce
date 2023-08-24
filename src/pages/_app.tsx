import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { Session } from 'next-auth';

import { SessionProvider } from "next-auth/react"
import Main from '@/components/Main';

interface IApp extends AppProps {
  session?: Session
}

export default function App({ Component, pageProps, session }: IApp) {
  return (
    <SessionProvider session={session}>
      <Main><Component {...pageProps} /></Main>
    </SessionProvider>
  )
}
