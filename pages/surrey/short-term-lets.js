import Head from "next/head";
import ShortTermLets from "../../components/locations/surrey/ShortTermLets";
export default function Corporatewrapper() {
  return (
    <>
      <Head>
        <title>Short Term Lets in Surrey | Surrey Serviced Apartments</title>
        <meta
          name="description"
          content="Find your ideal short-term stay in Surrey with StayLets. Modern apartments, discounted rates, and convenient booking. Book now!"
        />
      </Head>
      <ShortTermLets />
    </>
  );
}
