import Head from 'next/head'
import Aboutcomponent from "../components/content/About"

export default function About() {

    return (
        <>
            <Head>
                <title>Serviced Accommodation in Cheltenham & Surrey</title>
                <meta
                    name='description'
                    content='We provide you with accommodation that offers quality, comfort, value for money and that feeling of being appreciated.'
                />
            </Head>
            <Aboutcomponent />
        </>
    )
}
