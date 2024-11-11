import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Content from "../pages/Content";
import BookForm from "../pages/BookForm";


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
        element: <BookForm/>
      },
      {
        path: "/edit/:id",
        element: <BookForm/>
      }
    ]
},
]);


export default router;