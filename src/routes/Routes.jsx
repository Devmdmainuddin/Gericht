import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/blogs",
          element: <Blogs/>,
        },
      ],
    },
  ]);


export default router;