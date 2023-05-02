import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layouts/Main";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Recipes from "../pages/Recipes/Recipes";
import RecipesLayout from "../layouts/RecipesLayout";
  
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RecipesLayout></RecipesLayout>,
      children: [
        {
          path: "/",
          element: <Recipes></Recipes>,
        },
        {
          path: ":id",
          element: (
            // <PrivateRoute>
              <RecipeDetails></RecipeDetails>
            // </PrivateRoute>
          ),
        },
      ],
    }
    ]);
  
  
  
    export default router;