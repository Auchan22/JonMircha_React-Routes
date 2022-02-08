import { useLocation, useNavigate } from "react-router-dom";

const Productos = () => {
  // let location = useLocation();
  // console.log(location);

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  // console.log(query.get("inicio") + " " + query.get("fin"));

  const limit = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || limit;

  let navigate = useNavigate();

  const handlePrev = (e) => {
    navigate({ search: `?inicio=${start - limit}&fin=${end - limit}` });
  };

  const handleNext = (e) => {
    navigate({ search: `?inicio=${start + limit}&fin=${end + limit}` });
  };

  return (
    <div>
      <h2>Productos</h2>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > limit && <button onClick={handlePrev}>Atras</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
