import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "left"
      }}
    >
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/user/Miguel">Miguel</Link> */}
      <NavLink className={({ isActive }) => (isActive ? "red" : "blue")} to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "red" : "blue")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "red" : "blue")}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "red" : "blue")}
        to="/user/Miguel"
      >
        Miguel
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "red" : "blue")}
        to="/productos"
      >
        Productos
      </NavLink>
      <br />
      <h4>Redireccionamiento</h4>
      <NavLink
        className={({ isActive }) => (isActive ? "red" : "blue")}
        to="/contacto"
      >
        Contacto
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "red" : "blue")}
        to="/nosotros"
      >
        Nosotros
      </NavLink>
      <br />
      <h4>Rutas Anidadas</h4>
      <NavLink
        className={({ isActive }) => (isActive ? "red" : "blue")}
        to="/react"
      >
        React
      </NavLink>
      <br />
      <h4>Rutas Privadas</h4>
      <NavLink
        className={({ isActive }) => (isActive ? "red" : "blue")}
        to="/login"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "red" : "blue")}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </nav>
  );
};

export default NavBar;
