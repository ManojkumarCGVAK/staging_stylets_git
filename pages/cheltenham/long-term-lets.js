import Head from "next/head";
import LongTermLets from "../../components/locations/cheltenham/LongTermLets";
export default function Corporatewrapper() {
  return (
    <>
      <Head>
        <title>Long Term Lets in Cheltenham | Cheltenham Serviced Apartments</title>
        <meta
          name="description"
          content="Find your ideal long-term stay in Cheltenham with StayLets. Modern apartments, discounted rates, and convenient booking. Book now!"
        />
      </Head>
      <LongTermLets />
    </>
  );
}
