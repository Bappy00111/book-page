import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import reader from "../../src/assets/animation_ll3q6gqx.json"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Home = () => {
    return (
        <div className='max-w-[1240px] mx-auto  grid  md:grid-cols-2  items-center mt-20 px-5'>
            {/* text contain  */}
            <div className='col-span-1 '>
                <button className="btn btn-xs bg-yellow-400">ON SALE!</button>
                <h1 className='text-2xl md:text-4xl mt-2 mb-3 font-bold'>A reader lives a <br />
                    thousand lives <span className='text-sky-400'>before he dies</span></h1>
                <p className='text-lg mb-4'>Books are a uniquely portable magic. Books serve to show a <br /> man that those original thoughts of his aren't very new after <br /> all. The man who does not read good books is no better than <br /> the man who can't.</p>
                <Link to='/books'>
                <button className="btn bg-teal-300 hover:bg-sky-500">
                    Visit Store
                    <ShoppingCartIcon className='w-6 h-6'/>
                    </button></Link>
                <Link to='/about' className='text-lg ml-2 hover:text-cyan-600'>Learn More</Link>
            </div>
            {/*Lotte annimession  */}
            <div className='col-span-1 '>
                    <Lottie className='h-[500px]' animationData={reader} loop={true}></Lottie>
            </div>

        </div>
    );
};

export default Home;