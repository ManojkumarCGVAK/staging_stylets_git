import Head from "next/head";
import Corporate from "../components/landing/Corporate";
export default function Corporatewrapper() {
  return (
    <>
      <Head>
        <title>Corporate Accommodation in Cheltenham & Surrey</title>
        <meta
          name="description"
          content="We offer short let serviced apartments and studios available for stays from 1 to 365 nights a year, book online today."
        />
      </Head>
      <Corporate />
    </>
  );
}
