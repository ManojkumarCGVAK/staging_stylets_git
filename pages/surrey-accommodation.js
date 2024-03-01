import Head from 'next/head'
import SurreyAccommodation from '../components/landing/SurreyAccommodation'
export default function Surreyaccommodationwrapper() {

    return (
        <>
            <Head>
                <meta name='robots' />
                <title>Short Term Lets in Surrey | Surrey Serviced Apartments</title>
                <meta
                    name="description"
                    content="Discover competitively priced, fully furnished accommodation in Surrey with StayLets. From long-term to short-term lets, enjoy contemporary comfort and convenience."
                />
            </Head>
            <SurreyAccommodation />
        </>
    )
}
