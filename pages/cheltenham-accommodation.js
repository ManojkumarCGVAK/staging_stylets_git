import Head from "next/head";
import CheltenhamAccommodation from "../components/landing/CheltenhamAccommodation";

export default function Cheltenhamaccommodationwrapper() {
  return (
    <>
      <Head>
        <meta name="robots" />
        <title>
          Short Term Lets in Cheltenham | Cheltenham Serviced Apartments
        </title>
        <meta
          name="description"
          content="Discover competitively priced, fully furnished accommodation in Cheltenham with StayLets. From long-term to short-term lets, enjoy contemporary comfort and convenience."
        />
      </Head>
      <CheltenhamAccommodation />
    </>
  );
}
