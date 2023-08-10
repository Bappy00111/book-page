import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const {books}= useLoaderData()
    // console.log(books)
    return (
        <div className='max-w-[1240px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-[50px] p-5 '>
            {
                books.map(book => <Book
                book={book}
                key={book.isbn13}
                ></Book>)
            }
        </div>
    );
};

export default Books;