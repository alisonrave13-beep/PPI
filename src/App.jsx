import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Noticias from "./pages/Noticias.jsx";
import Cryptos from "./pages/Cryptos.jsx";
import Reseñas from "./pages/Reseñas.jsx";
import Contacto from "./pages/Contacto.jsx";
import RegistroVendedor from "./pages/RegistroVendedor.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/noticias", element: <Noticias /> },
      { path: "/cryptos", element: <Cryptos /> },
      { path: "/reseñas", element: <Reseñas /> },
      { path: "/contacto", element: <Contacto /> },
      { path: "/registro-vendedor", element: <RegistroVendedor /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;