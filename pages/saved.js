import Head from 'next/head'
import Saved from "../components/saved"
export default function Savedwrapper() {

    return (
        <>
            <Head>
                <title>Saved Properties</title>
            </Head>
            <Saved />
        </>
    )
}
