import Home from "./components/Home";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import BottomMusicPlayer from "./components/BottomMusicPlayer";
import "./assets/styles/App.css";

function App() {
  return (
    <section id="app-layout">
      <section id="main-box">
        <aside id="side-box">
          <LeftSidebar />
        </aside>
        <section id="home-box">
          <Home />
        </section>
        <aside id="side-box">
          <RightSidebar />
        </aside>
      </section>
      <footer>
        <BottomMusicPlayer />
      </footer>
    </section>
  );
}

export default App;
