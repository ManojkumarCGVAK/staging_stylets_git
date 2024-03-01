import Head from 'next/head'
import  Homecom from "../components/home"
import { useDispatch } from 'react-redux';
import { getProperties } from "../actions/propertiesActions" 
import { useEffect } from 'react';
import {responseHandler} from '../util/commonHandler';
import getPost from '../serverutil/blogRequest'

export async function getStaticProps(){
  
  const allPost = await Promise.allSettled([
    getPost({}).then(responseHandler),
    getPost({location:'cheltenham'}).then(responseHandler),
    getPost({location:'surrey'}).then(responseHandler)
  ]); 
  
  const [first,Cheltenham, Surrey] = allPost;

  return {
    props: { 
      posts:first?.value && first?.value,
      Cheltenham:Cheltenham?.value && Cheltenham.value,
      Surrey:Surrey?.value &&  Surrey?.value,
    },
  }
}


export default function Home(props) {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getProperties())
  },[dispatch])

  return (
   <>
      <Head>
      <title>Short Stay Lets in Cheltenham, Surrey & London</title>
					<meta
						name='description'
						content='We provide modern and convenient serviced apartments that offer quality, comfort and value for money. Book your stay in Cheltenham or Surrey today.'
					/>

      </Head>
      <Homecom {...props}/>
      </>
  )
}
