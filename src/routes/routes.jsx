import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Courses from "../pages/Courses/Courses";
import Blogs from "../pages/Blogs/Blogs";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: ()=> fetch('https://server-food-chef.vercel.app/chef')
        },
        {
          path: "/chef/:id",
          element: <ChefDetails />,
          loader: ({params})=> fetch(`https://server-food-chef.vercel.app/chef/${params.id}`)
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "blogs",
          element: <Blogs />,
        },
      ],
    },
  ]);