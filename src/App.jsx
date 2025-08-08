import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Categories from "./components/shop-page/Categories"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import RootLayout from "./components/layouts/RootLayout"
import AboutPage from "./pages/AboutPage"
import ShoppingPage from "./pages/ShoppingPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Login_register from "./pages/Login_register"
import ShoppingCart from "./pages/ShoppingCart"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { initializeCart } from "./store/cartSlice"
import ContactForm from "./pages/ContactForm"
import MainContact from "./pages/MainContact"


const routes = [
  { path: "/", element: <RootLayout />, children: [
      {path: "", element: <HomePage />},
      {path: "categories/:category", element: <Categories />},
      {path: "shopping", element: <ShoppingPage />},
      { path: "about", element: <AboutPage /> },
    { path: "product/:id", element: <ProductPage /> },
    { path: "contact-form", element: <ContactForm /> },
    {path:"contact", element:<MainContact />},
    { path: "shopping-cart", element: <ShoppingCart /> }
  ],
  },
  { path: "/login", element: <Login_register /> },
  { path: "/register", element: <Register /> },
    {path: "*", element: <p>404 Not Found</p>},  
]
const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user?.username) {
      dispatch(initializeCart(user.username));
    }
  }, [dispatch, user]);
  
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
