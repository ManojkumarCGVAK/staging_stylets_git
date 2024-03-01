import Head from 'next/head'
import Cheltenham from "../components/locations/cheltenham"
import {responseHandler} from '../util/commonHandler';
import getPost from '../serverutil/blogRequest'

export async function getStaticProps(){
    const response = await getPost({location:'cheltenham'}).then(responseHandler); 
     return {
        props:{
            posts:response,
            location:'Cheltenham'
        },
        revalidate:3600
    }
}

export default function Aboutcheltenham(props) {

    return (
        <>
            <Head>
            <title>Book A Stay In Cheltenham - Visit Cheltenham </title>
					<meta
						name='description'
						content='Renowned for its shopping, theatre and festivals, Cheltenham is truly a year-round town, with something for all interests and tastes.'
					/>
            </Head>
            <Cheltenham {...props}/>
        </>
    )
}
