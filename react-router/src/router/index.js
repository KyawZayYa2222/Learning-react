import {
createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import SingleBlog from "../pages/SingleBlog";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: '/blogs/:id',
        element: <SingleBlog/>
      }
    ]
},
{
  path: "*",
  element: <NotFound/>
}
]);

export default router;