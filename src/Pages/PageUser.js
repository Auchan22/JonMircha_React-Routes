import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PageUser = () => {
  let { username } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      alert("Volviendo al Home");
      navigate("/");
    }, 5000);
  }, []);
  // console.log(params);
  return (
    <div>
      <h1>Perfil del usuario</h1>
      <br />
      <p>
        Nombre del usuario: <b>{username}</b>
      </p>
    </div>
  );
};

export default PageUser;
