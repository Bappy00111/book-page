
import { Link, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const Book = ({ book }) => {

    // console.log(book)
    const { image, price, title, subtitle } = book;

    // const navigation = useNavigation()
    // console.log(navigation.state)
    // if(navigation.state === 'loading')
    // return <Loader></Loader>
    return (
        <Link to={`/books/${book.isbn13}`}>
            <div className='relative transition duration-200 transform hover:-translate-y-2 shadow-2xl rounded'>
                <img className='object-cover w-full' src={image} alt="" />
                <div className='bg-black py-4 px-6 text-gray-300 bg-opacity-75 opacity-0 md:hover:opacity-100 absolute inset-0 rounded transition-opacity duration-200   flex flex-col'>
                    <p className='text-lg md:text-3xl font-bold'>{title}</p>
                    <br />
                    <p>{subtitle.substring(0, 45)}...</p>
                    <br />
                    <p className='mt-auto'>Price: {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;