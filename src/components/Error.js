import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>Error 404: no existe la ruta</h2>
      Back <Link to="/">Home</Link>
    </div>
  );
};

export default Error;
