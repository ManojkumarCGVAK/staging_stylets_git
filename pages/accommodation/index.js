import Head from "next/head";
import Accommodation from "../../components/accommodation/index"

export default function Accommodationwrapper() {
  return (
    <>
      <Head>
        <title>Serviced Apartments in Cheltenham, Surrey & London</title>
        <meta
          name="description"
          content="Book online instantly with great rates for modern, covenant accommodation in Cheltenham or Surrey."
        />
      </Head>
      <Accommodation />
    </>
  );
}
