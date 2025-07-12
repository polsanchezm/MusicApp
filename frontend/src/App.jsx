import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import BottomMusicPlayer from "./components/BottomMusicPlayer";
import "./assets/styles/App.css";

function App() {
  return (
    <section id="app-layout">
      <section id="main-box">
        <aside id="side-box">
          <Sidebar />
        </aside>
        <section id="home-box">
          <Home />
        </section>
        <aside id="side-box">
          <Sidebar />
        </aside>
      </section>
      <footer>
        <BottomMusicPlayer />
      </footer>
    </section>
  );
}

export default App;
