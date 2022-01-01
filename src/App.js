import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
