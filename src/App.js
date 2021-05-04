import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/heroSection/heroSection";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Blogs from "./components/blogs/blogs";
import JoinUs from "./components/joinUs/joinUs";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Projects />
      <Blogs />
      <JoinUs />
    </div>
  );
}

export default App;
