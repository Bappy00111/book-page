import React from 'react';

const Book = ({ book }) => {
    console.log(book)
    const { image, price, title, subtitle } = book;
    return (
        <div className='relative transition duration-200 transform hover:-translate-y-2 '>
            <img className='object-cover w-full h-56 md:h-64 lg:h-96' src={image} alt="" />
            <div className='bg-black py-4 px-6 text-gray-300 bg-opacity-75 opacity-0 md:hover:opacity-100 absolute inset-0 rounded transition-opacity duration-200 shadow-lg hover:shadow-2xl flex flex-col'>
                <p className='text-lg md:text-3xl font-bold'>{title}</p>
                <br />
                <p>{subtitle.substring(0,45)}...</p>
                <br />
                <p className='mt-auto'>Price: {price}</p>
            </div>
        </div>
    );
};

export default Book;