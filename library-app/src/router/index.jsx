import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Content from "../pages/Content";
import BookCreate from "../pages/BookCreate";


const router = createBrowserRouter([
{
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/content/:id",
        element: <Content/>
      },
      {
        path: "/create",
        element: <BookCreate/>
      }
    ]
},
]);


export default router;