import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import "../styles/container.css"
import { Outlet } from "react-router"

const Layout = () => (
  <div className="contenedor">
    <Nav />
    <div className="container-page">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;