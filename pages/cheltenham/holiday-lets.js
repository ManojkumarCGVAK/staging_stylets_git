import Head from "next/head";
import HolidayLets from "../../components/locations/cheltenham/HolidayLets";
export default function Corporatewrapper() {
  return (
    <>
      <Head>
        <title>Holiday Lets in Cheltenham | Cheltenham Serviced Apartments</title>
        <meta
          name="description"
          content="Discover convenient holiday lets in Cheltenham. From spacious accommodations to family-friendly features, our self-contained apartments offer comfort and relaxation."
        />
      </Head>
      <HolidayLets />
    </>
  );
}
