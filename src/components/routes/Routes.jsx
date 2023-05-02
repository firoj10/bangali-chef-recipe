import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import FoodDetails from "../FoodDetails/FoodDetails";

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
        {
            path: 'category/:id',
            element: <FoodDetails></FoodDetails>,
            loader: ({params})=> fetch(` http://localhost:5000/categories/${params.id}`)
        }
    ]
    },
  ]);

  export default router;