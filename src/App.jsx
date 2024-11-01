import Hero from "./Components/banner/Hero";
import Navbar from "./Components/banner/Navbar";
import Experience from "./Components/Experiences/Experience";
import { About } from "./Components/SectionAbout/About";

function App() {
  return (
    <>
      <div className="w-full px-20 py-0 flex flex-col justify-start items-start">
        <Navbar />
        <Hero />
        <About />
        <Experience/>
      </div>
    </>
  );
}

export default App;
