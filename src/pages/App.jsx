import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="horizontal-container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
