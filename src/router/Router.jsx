import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import PrivetRoute from "./PrivetRoute";
import Details from "../pages/Details";
import AddFood from "../pages/AddFood";
import MyFood from "../pages/MyFood";
import UpdateFood from "../pages/UpdateFood";
import Purchase from "../pages/Purchase";
import MyPurchase from "../pages/MyPurchase";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/foods`)
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/register",
          element:<Register></Register>,
        },
        {
          path:"/all-foods",
          element:<AllFoods></AllFoods>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/foods`)
        },

        {
          path:"/single-food/:id",
          element:<PrivetRoute><Details></Details></PrivetRoute>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/single-food/${params.id}`),
        },
        {
          path:"/add-food",
          element:<PrivetRoute><AddFood></AddFood></PrivetRoute>,
        },
        {
          path:"/my-food",
          element:<PrivetRoute><MyFood></MyFood></PrivetRoute>,
        },
        {
          path:"/my-order",
          element:<PrivetRoute><MyPurchase></MyPurchase></PrivetRoute>,
        },
        {
          path:"/update-food/:id",
          element:<PrivetRoute><UpdateFood></UpdateFood></PrivetRoute>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/single-food/${params.id}`),
        },
        {
          path:"/gallery",
          element:<Gallery></Gallery>,
        },
        
        {
          path:"/purchase/:id",
          element:<PrivetRoute><Purchase></Purchase></PrivetRoute>,
          loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/single-food/${params.id}`),

        },
      
        
      ]
    },
  ])

  export default router;