import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/AboutSkills/skill";
import Works from "./components/Works/works";
import Exp from "./components/Experience/exp";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Exp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
