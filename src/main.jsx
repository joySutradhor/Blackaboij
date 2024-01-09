import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './ClientSide/main';
import Home from './ClientSide/Home/Home';
import SingleProduct from './ClientSide/Home/SingleProduct/SingleProduct';
import ManCollections from './ClientSide/Pages/ManCollections/ManCollections';
import Store from './ClientSide/Pages/Store/Store';
import AllProducts from './ClientSide/Pages/AllProducts/AllProducts';
// all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : "/",
        element: <Home></Home>
      },
      {
        path : "/product/:id",
        element: <SingleProduct></SingleProduct>
      },
      {
        path : "allProducts/product/:id",
        element: <SingleProduct></SingleProduct>
      },
      {
        path : "menCollections/product/:id",
        element: <SingleProduct></SingleProduct>
      },
      {
        path : "/menCollections",
        element : <ManCollections></ManCollections>
      },
      {
        path : "/store",
        element: <Store></Store>
      },
      {
        path : "/allProducts",
        element : <AllProducts></AllProducts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
