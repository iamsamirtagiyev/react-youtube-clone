import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";

function App() {

  const [menu, setMenu] = useState('')

  return (
    <div className="App">
      <Navbar menu={menu} setMenu={setMenu} />
      <div className="content">
        <Sidebar menu={menu} />
        {useRoutes(routes)}
      </div>
    </div>
  );
}

export default App;
