import Head from 'next/head'
import Contact from "../components/contact/index"

export default function Home() {
  
  return (
   <>
      <Head>
      <title>Book Your Stay In Cheltenham Or Surrey Today</title>
					<meta
						name='description'
						content='Book with us online via this website, call us or contact us using our online contact form. We look forward to hearing from you.'
        />
      </Head>
     <Contact />
      </>
  )
}
