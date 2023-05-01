import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
    ]
    },
  ]);

  export default router;