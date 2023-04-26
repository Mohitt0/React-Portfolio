import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import useLocalstorage from "use-local-storage";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [theme, setTheme] = useLocalstorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <Sidebar theme={theme} switchTheme={switchTheme} />
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Project/>
      </main>
    </div>
  );
}

export default App;
