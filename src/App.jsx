import Hero from "./Components/banner/Hero";
import Navbar from "./Components/banner/Navbar";

function App() {
  return (
    <>
      <div className="w-full px-72 py-0 flex flex-col justify-start items-start">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;
