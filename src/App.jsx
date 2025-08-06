import { createBrowserRouter, RouterProvider } from "react-router"
import Categories from "./components/shop-page/Categories"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import RootLayout from "./components/layouts/RootLayout"
import AboutPage from "./pages/AboutPage"
import ShoppingPage from "./pages/ShoppingPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Login_register from "./pages/Login_register"




const routes = [
  { path: "/", element: <RootLayout />, children: [
      {path: "", element: <HomePage />},
      {path: "categories/:category", element: <Categories />},
      {path: "shopping", element: <ShoppingPage />},
      { path: "about", element: <AboutPage /> },
    { path: "product/:id", element: <ProductPage /> },
    {path:"contact",element:<p>Contact us</p>}
  ],
  },
  { path: "/login", element: <Login_register /> },
  { path: "/register", element: <Register /> },
    {path: "*", element: <p>404 Not Found</p>},  
]
const router = createBrowserRouter(routes);

function App() {
  
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
