import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const BookDetels = () => {
    const [fold,setFold] = useState(true)
    const navigation = useNavigation()
    console.log(navigation.state)
    if(navigation.state === 'loading')
    return <Loader></Loader>
   
    const data = useLoaderData()
    
   
    // console.log(data)
    const { authors, desc, image, price, publisher, rating, title, year } = data;
    return (
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2  border border-gray-200 rounded my-20 p-20'>
            <div className='col-span-1  p-5'>
                <img className='h-full border shadow-xl rounded' src={image} alt="" />
            </div>
            <div className='col-span-1  p-5'>
                <button className="btn btn-xs bg-yellow-400">BRAND NEW!</button>
                <p className='text-xl md:text-3xl font-bold mt-2'>{title}</p>
                <div className='py-3 text-gray-500'>
                    <p>Authors : {authors}</p>
                    <p>Publisher : {publisher}</p>
                    <p>Year : {year}</p>
                    <p>Rating : {rating}</p>
                </div>
                {fold ? 
                <p className='text-gray-500'>{desc.substring(0, 100)}...<Link><span className='text-teal-600' onClick={()=>setFold(false)}>Read More</span></Link></p>
                :
                <p className='text-gray-500'>{desc}...<Link><span className='text-teal-600' onClick={()=>setFold(true)}>Read Less</span></Link></p>
                }
                <span className='flex items-center gap-2 mt-2'>
                        <button className="btn bg-blue-400 hover:bg-sky-500"> Buy Now </button>
                        <p className='text-gray-500'>Price : {price}</p>
                    </span>
            </div>

        </div>
    );
};

export default BookDetels;