import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react'
import  LinearProgress   from '@mui/material/LinearProgress';
import Topbar from '../components/Layout/Topbar';
import Footer from '../components/Layout/Footer';

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url: string) => setLoading(true);
      const handleComplete = (url: string) => setTimeout(() =>{setLoading(false)},300);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  }, [])
  
  return loading?(<div style={{position: "absolute", left:"0", right:"0", width:"100vw",zIndex: "1"}}><LinearProgress color="inherit"/></div>):(<div></div>)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Topbar/>
          <Loading/>
          <Component {...pageProps} />
          <Footer />
      </>
  )     
}

export default MyApp
