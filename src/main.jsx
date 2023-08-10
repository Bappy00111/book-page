import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Books from './components/Books.jsx';
import BookDetels from './components/BookDetels.jsx';
import Loader from './components/Loader.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/books',
        element:<Books></Books>,
        loader:()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path:'/books/:id',
        element:<BookDetels></BookDetels>,
        loader:({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path:"/about",
        element:<About></About>
      }
      ,
      {
        path:'/loader',
        element:<Loader></Loader>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
