import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import RecipesLayout from "../layouts/RecipesLayout";
import AllChefs from "../pages/AllChefs/AllChefs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LoginLayout from "../layouts/LoginLayout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipesLayout></RecipesLayout>,
    children: [
      {
        path: "/",
        element: <AllChefs></AllChefs>,
        loader: () => fetch(`http://localhost:5000/allChefs`)
      },
      {
        path: ":id",
        element:
          // <PrivateRoute>
          <RecipeDetails></RecipeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefRecipes/${params.id}`)
      },
    ],
  },
  
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  }
]);



export default router;