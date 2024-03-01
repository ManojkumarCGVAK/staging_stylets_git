import Head from "next/head";
import HolidayLets from "../../components/locations/surrey/HolidayLets";
export default function Corporatewrapper() {
  return (
    <>
      <Head>
        <title>Holiday Lets in Surrey | Surrey Serviced Apartments</title>
        <meta
          name="description"
          content="Discover convenient holiday lets in Surrey. From spacious accommodations to family-friendly features, our self-contained apartments offer comfort and relaxation."
        />
      </Head>
      <HolidayLets />
    </>
  );
}
