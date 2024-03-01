import Head from "next/head";
import CorporateOffer from '../components/landing/CorporateOffer'

export default function CorporateOfferwrapper() {
  return (
    <>
      <Head>
            <meta name='robots' content='noindex' />
            <title>Corporate Offer | Short stay lets in the South West</title>
      </Head>
      <CorporateOffer />
    </>
  );
}
