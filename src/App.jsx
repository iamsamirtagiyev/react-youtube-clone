import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {useRoutes(routes)}
    </div>
  );
}

export default App;
