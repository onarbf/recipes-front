import HomePage from '../pages/HomePage/HomePage.js';
import RecipePage from '../pages/RecipePage/RecipePage.js';
import { createBrowserRouter, redirect } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "*",
        loader: async () => redirect('/')
      },
  {
    path: "/",
    element: (
      <HomePage/>
    ),
  },
  {
    path: "/recipe/:id",
    element: (<RecipePage/>)
  },
]);

export default router;