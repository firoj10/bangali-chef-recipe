import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import FoodDetails from "../FoodDetails/FoodDetails";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
      },
      {
          path: 'register',
          element: <Register></Register>
      },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
            path: 'category/:id',
            element: <PrivetRoute><FoodDetails></FoodDetails></PrivetRoute>,
            loader: ({params})=> fetch(` http://localhost:5000/categories/${params.id}`)
        }
    ]
    },
  ]);

  export default router;