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
import Tees from './ClientSide/Pages/Tees/Tees';
import HoodiesAndSweeters from './ClientSide/Pages/HoodiesAndSweeters/HoodiesAndSweeters';
import Pants from './ClientSide/Pages/Pants/Pants';
import Outwear from './ClientSide/Pages/Outwear/Outwear';
import Accessories from './ClientSide/Pages/Accessories/Accessories';
import Womens from './ClientSide/Pages/WomensCollections/Womens/Womens';
import WomensTees from './ClientSide/Pages/WomensCollections/WomensTees/WomensTees';
import WomenHoodies from './ClientSide/Pages/WomensCollections/WomenHoodies/WomenHoodies';
import WomenPants from './ClientSide/Pages/WomensCollections/WomenPants/WomenPants';
import WomenOutwear from './ClientSide/Pages/WomensCollections/WomenOutwear/WomenOutwear';
import Prince from './ClientSide/Pages/PrinceCollections/Prince';
import PrinceTees from './ClientSide/Pages/PrinceCollections/PrinceTees';
import PrincePants from './ClientSide/Pages/PrinceCollections/PrincePants';
import PrinceHoodies from './ClientSide/Pages/PrinceCollections/PrinceHoodies';
import PrinceOutwear from './ClientSide/Pages/PrinceCollections/PrinceOutwear';
import Princess from './ClientSide/Pages/PrincessCollection/Princess';
import PrincessTees from './ClientSide/Pages/PrincessCollection/PrincessTees';
import PrincessHoodies from './ClientSide/Pages/PrincessCollection/PrincessHoodies';
import PrincessPants from './ClientSide/Pages/PrincessCollection/PrincessPants';
import PrincessOutwear from './ClientSide/Pages/PrincessCollection/PrincessOutwear';
// import AllProductSearch from './ClientSide/Pages/AllProductSearch/AllProductSearch';
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
      },
      {
        path : "/tees",
        element : <Tees></Tees>
      },
      {
        path : "/hoodiesAndSweeters" ,
        element : <HoodiesAndSweeters></HoodiesAndSweeters>
      },
      {
        path : "/pants",
        element : <Pants></Pants>
      },
      {
        path : "/outwear",
        element : <Outwear></Outwear>
      },
      {
        path : "/accessories",
        element : <Accessories></Accessories>
      },
      {
        path : "/womens",
        element : <Womens></Womens>
      },
      {
        path : "/womenTees",
        element : <WomensTees></WomensTees>
      },
      {
        path : "/womensHoodies",
        element : <WomenHoodies></WomenHoodies>
      },
      {
        path : "/womenPants",
        element : <WomenPants></WomenPants>
      },
      {
        path : "/womenOutwear",
        element : <WomenOutwear></WomenOutwear>
      },
      {
        path : "/princeCollections",
        element : <Prince></Prince>
      },
      {
        path : "/princeTeesCollections",
        element : <PrinceTees></PrinceTees>
      },
      {
        path : "/princePants" ,
        element : <PrincePants></PrincePants>
        
      },
      {
        path : "/hoodiesAndSweeters",
        element : <PrinceHoodies></PrinceHoodies>
      },
      {
        path : "/princeOutwear",
        element : <PrinceOutwear></PrinceOutwear>
      },
      {
        path : "/princessCollections",
        element : <Princess></Princess>
      },
      {
        path : "/princessTees",
        element : <PrincessTees></PrincessTees>
      },
      {
        path : "/princessHoodies",
        element : <PrincessHoodies></PrincessHoodies>
      },
      {
        path : "/princessPants",
        element : <PrincessPants></PrincessPants>
      },
      {
        path : "/princessOutwear",
        element : <PrincessOutwear></PrincessOutwear>
      }
      // {
      //   path : "/allProductSearch",
      //   element : <AllProductSearch></AllProductSearch>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
