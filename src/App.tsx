import { Link } from "react-router";
import "./App.css";
function App() {
  return (
    <div>
      <h1 className="text-7xl mb-5"> TodoList!</h1>
      <Link to="/signin">
        <button className="bg-slate-500 py-3 px-5 rounded">Go!</button>
      </Link>
    </div>
  );
}

export default App;
