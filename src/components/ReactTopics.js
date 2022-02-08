import { Link, Routes, Route, useParams, Outlet } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h2>Titulo: {topic}</h2>
    </div>
  );
};

const ReactTopics = () => {
  return (
    <div>
      <h3>React Topics: temas</h3>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="state">State</Link>
        </li>
        <li>
          <Link to="hooks">Hooks</Link>
        </li>
      </ul>
      <Outlet />

      {/* <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes> */}
    </div>
  );
};

export default ReactTopics;
