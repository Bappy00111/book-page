import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import Loader from './Loader';

const Books = () => {

    // loading spainer 
    const navigation = useNavigation()
    console.log(navigation.state)
    if(navigation.state === 'loading')
    return <Loader></Loader>


    const {books}= useLoaderData()
    // console.log(books)
   
    return (
        <div className='max-w-[1240px] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-[50px] p-10 '>
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