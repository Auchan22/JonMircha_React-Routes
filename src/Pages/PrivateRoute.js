import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

//Forma 1: recibiendo el componente children y en App, poniendolo en un route
const PrivateRoute = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  return isLogged ? children : <Navigate to="/login" />;
};

// export default PrivateRoute;

//Forma 2: utilizando el componente Outlet
const PrivateOutlet = () => {
  const [isLogged, setIsLogged] = useState(true);
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
