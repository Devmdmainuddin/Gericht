import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";



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
      ],
    },
  ]);


export default router;