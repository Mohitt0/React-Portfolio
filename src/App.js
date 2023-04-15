import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main">
        <Home/>
      </main>
    </div>
  );
}

export default App;
