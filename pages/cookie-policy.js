import Head from 'next/head'
import Cookiepolicy from "../components/content/CookiePolicy";

export default function Home() {
  
  return (
   <>
      <Head>
      <title>Cookie Policy</title>
      </Head>
     <Cookiepolicy />
      </>
  )
}
