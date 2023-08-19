import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/context/AuthContext'
import { useRouter } from 'next/router';
import { checkIsPublicRoute } from '@/functions/check-is-a-public-route';
import PublicMain from '@/components/PublicMain';
import ProtectedMain from '@/components/ProtectedMain';

export default function App({ Component, pageProps }: AppProps) {

  const pathName = useRouter();
  const route = pathName.route;
  const isPublic = checkIsPublicRoute(route);

  return(
    <AuthProvider>
      {
        isPublic?
        <PublicMain><Component {...pageProps} /></PublicMain>:
        <ProtectedMain><Component {...pageProps} /></ProtectedMain>
      }
    </AuthProvider>
  ) 
}
