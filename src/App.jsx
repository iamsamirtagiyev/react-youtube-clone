import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        {useRoutes(routes)}
      </div>
    </div>
  );
}

export default App;
