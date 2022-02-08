import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import PageUser from "./Pages/PageUser";
import Productos from "./components/Productos";
import ReactTopics from "./components/ReactTopics";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./Pages/PrivateRoute";
import PrivateOutlet from "./Pages/PrivateRoute";

export default function App() {
  return (
    <div className="App">
      {/* Con HashRouter */}
      <h1>Hash Router</h1>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">Acerca</Link>
          <br />
          <Link to="contact">Contacto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>

      <hr />

      {/* Con ReactRouter */}
      <h1>React Router</h1>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:username" element={<PageUser />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Navigate to="/about" />} />
          <Route path="/contacto" element={<Navigate to="/contact" />} />
          <Route path="/react/*" element={<ReactTopics />}>
            <Route
              index
              element={
                <h2>
                  Elemento que se muestra al cargar el componente padre en su
                  ruta inicial{" "}
                </h2>
              }
            />
            <Route path="jsx" element={<h2>hola jsx</h2>} />
            <Route path="props" element={<h2>hola props </h2>} />
            <Route path="state" element={<h2>hola state</h2>} />
            <Route path="hooks" element={<h2>hola hooks</h2>} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

          {/*Forma 1, con children; NESTED */}
          {/* <Route
            exact
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          /> */}

          {/*Forma 2, con <Outlet /> */}
          <Route path="/dashboard" element={<PrivateOutlet />}>
            <Route path="" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}
