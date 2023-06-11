import About from "./components/About";
import Education from "./components/Education";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Education />
      <SocialLinks />
    </div>
  );
}

export default App;
