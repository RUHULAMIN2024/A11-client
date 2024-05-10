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
          path:"/gallery",
          element:<Gallery></Gallery>,
        },
        

      
        
      ]
    },
  ])

  export default router;