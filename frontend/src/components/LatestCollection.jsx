import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { products } from '../assets/assets';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {Products} = useContext(ShopContext);
   const [latestProducts,setLatestProducts] = useState([]);

   useEffect(()=>{
    setLatestProducts(products.slice(0,10));
   },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
            Lorem ipsum dolor sitinctio cumque unde cupiditate optio praesentnatus repudiandae, nam minima.
            </p>
        </div>
        {/* Rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection