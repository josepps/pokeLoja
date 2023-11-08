import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home/Index';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  export default router;