import Hero from "./Components/banner/Hero";
import Navbar from "./Components/banner/Navbar";
import Experience from "./Components/Experiences/Experience";
import About  from "./Components/SectionAbout/About";
import Service from "./Components/Services/Service";
import { ThemeProvider } from "./ThemeContext";

function App() {

  document.title = "BenjiDev"
 
  return (
    <>
      <ThemeProvider>
        <div className={`w-full px-20 py-0 flex flex-col justify-start items-start gap-5 light:bg-[#f2f2f2] dark:bg-[#131313] transition ease-in-out transition ease-in-out`}>
          <Navbar/>
          <Hero />
          <About />
          <Experience/>
          <Service/>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
