import App from "@/App";
import About from "@/pages/About/About";
import Cart from "@/pages/Cart/Cart";
import Contact from "@/pages/Contact/Contact";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home/Home";
import ManageProducts from "@/pages/ManageProducts/ManageProducts";
import Payment from "@/pages/Payment/Payment";
import ProductPage from "@/pages/Product/ProductPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
