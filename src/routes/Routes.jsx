import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Services from "../pages/Services";
import BlogDetaills from "../pages/BlogDetaills";



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
          path: "/services",
          element: <Services/>,
        },
        {
          path: "/blogs",
          element: <Blogs/>,
        },
        {
          path: "/blogsDetaills",
          element: <BlogDetaills/>,
        },
      ],
    },
  ]);


export default router;