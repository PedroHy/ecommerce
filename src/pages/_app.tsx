import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router';
import { checkIsPublicRoute } from '@/functions/check-is-a-public-route';
import PublicMain from '@/components/PublicMain';
import ProtectedMain from '@/components/ProtectedMain';

interface IApp extends AppProps{
  session?: any
}

export default function App({ Component, pageProps, session }:IApp) {

  const pathName = useRouter();
  const route = pathName.route;
  const isPublic = checkIsPublicRoute(route);

  return(
    <SessionProvider session={session}>
      {
        isPublic?
        <PublicMain><Component {...pageProps} /></PublicMain>:
        <ProtectedMain><Component {...pageProps} /></ProtectedMain>
      }
    </SessionProvider>
  ) 
}
