import {createBrowserRouter} from "react-router-dom";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import RecipesLayout from "../layouts/RecipesLayout";
import AllChefs from "../pages/AllChefs/AllChefs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipesLayout></RecipesLayout>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <AllChefs></AllChefs>,
        loader: () => fetch(`https://find-chef-serverside-nusratparvin.vercel.app/allChefs`)
      },
      
    ],
  },
  
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    errorElement: <Error/>,
    children:[{
        path: "/chefRecipes/:id",
        element:
          <PrivateRoute>
          <RecipeDetails></RecipeDetails>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`https://find-chef-serverside-nusratparvin.vercel.app/chefRecipes/${params.id}`)
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
    ]
  }
]);



export default router;