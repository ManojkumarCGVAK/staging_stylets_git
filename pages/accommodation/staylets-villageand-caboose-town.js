import Head from "next/head";
import OfferStaticpage from "../../components/accommodation/OfferStaticpage"

export default function Accommodationwrapper() {
  return (
    <>
      <Head>
        <title> Caboose Town @ The Festival, Cheltenham March 2024</title>
        <meta
          name="description"
          content="Book online instantly with great rates for modern, covenant accommodation in Cheltenham or Surrey."
        />
      </Head>
      <OfferStaticpage />
    </>
  );
}
