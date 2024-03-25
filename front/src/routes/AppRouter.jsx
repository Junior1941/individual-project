import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import LoginForm from "../components/pages/LoginForm";
import RegisterForm from "../components/pages/RegisterForm";
import useAuth from "../hooks/useAuth";
import Forgotpassword from "../components/pages/Forgotpassword";
import Landing from "../components/pages/Landing";
import Home from "../components/pages/Home";
import NavBar from "../components/navbar/NavBar";
import Product from "../components/pages/Product";
import Cart from "../components/pages/Cart";
import NavBarcart from "../components/navbar/NavBarcart";
import Profile  from "../components/pages/Profile";
import ErrorBoundary from "../components/pages/ErrorBoundary";
import Makepayment from "../components/pages/Makepayment";


const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    errorElement: <ErrorBoundary/>,
    children: [
      { index: true, element: <Landing /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
      { path: "/forgotpassword", element: <Forgotpassword /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
       
        <NavBarcart />
        <NavBar />
        <Outlet />
      </>
    ),
    errorElement: <ErrorBoundary/>,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Navigate to="/" /> },
      { path: "/register", element: <Navigate to="/" /> },
      { path: "/forgotpassword", element: <Forgotpassword /> },
      { path: "/home", element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/profile", element: <Profile/>},
      {path:  "/makepayment", element: <Makepayment/>},

    ],
  },
]);

export default function AppRouter() {
  const { user } = useAuth();
  const finalRouter = user?.id ? userRouter : guestRouter;
  return <RouterProvider router={finalRouter} />;
}
