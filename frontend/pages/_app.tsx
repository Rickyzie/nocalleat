import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react'
import  LinearProgress   from '@mui/material/LinearProgress';
function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},500);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  return loading?(<LinearProgress />):(<div></div>)
}
function MyApp({ Component, pageProps }: AppProps) {
  return <><Loading/><Component {...pageProps} /></>
}

export default MyApp
