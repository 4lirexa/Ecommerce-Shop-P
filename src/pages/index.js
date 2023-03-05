import Head from 'next/head'
import { useRouter } from 'next/router';
import {useState,useEffect} from 'react';

import { Product,FooterBanner,HeroBanner } from '@/components'
import { client } from '@/lib/client'
import { ThreeDots } from 'react-loader-spinner';

export default function Home({products,bannerData}) {


  const router = useRouter();

  // Use the isLoading variable to show or hide your loader
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
      const handleStart = () => {
          setIsLoading(true);
      };
      const handleComplete = () => {
          setIsLoading(false);
      };
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading' >
        <h2>Best Selling Products</h2>
        <p>Speakers There are many many variations passages</p>
      </div>

      <div className='products-container' >
        {products?.map(
          (product) => <Product key={product._id} product={product} />
        )}
      </div>


      <FooterBanner footerBanner={bannerData && bannerData[0]} />
      <div className={isLoading ? 'loading-hover active' : 'loading-hover'}>
            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="#fff" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />
        </div>
    </>
  )
}


export const getServerSideProps = async ()=>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props : {
      products,
      bannerData
    }
  }
}