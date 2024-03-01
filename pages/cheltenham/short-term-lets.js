import Head from "next/head";
import ShortTermLets from "../../components/locations/cheltenham/ShortTermLets";
export default function Corporatewrapper() {
  return (
    <>
      <Head>
        <title>Short Term Lets in Cheltenham | Cheltenham Serviced Apartments</title>
        <meta
          name="description"
          content="Find your ideal short-term stay in Cheltenham with StayLets. Modern apartments, discounted rates, and convenient booking. Book now!"
        />
      </Head>
      <ShortTermLets />
    </>
  );
}
