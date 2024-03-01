import Head from 'next/head'
import Surrey from "../components/locations/surrey"
import {responseHandler} from '../util/commonHandler';
import getPost from '../serverutil/blogRequest'

export async function getStaticProps(){
    const response = await getPost({location:'surrey'}).then(responseHandler); 
    return {
        props:{
            posts:response ,
            location:'Surrey'
        },
        revalidate:3600
    }
}

export default function Aboutsurrey(props) {

    return (
        <>
            <Head>
            <title>Book A Stay In Surrey - Visit Surrey</title>
					<meta
						name='description'
						content='Egham is an ideal base whether you are planning day trips to London or you simply want to explore the countryside and woodlands.'
					/>
            </Head>
            <Surrey {...props}/>
        </>
    )
}
