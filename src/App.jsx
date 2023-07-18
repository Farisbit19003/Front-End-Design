import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import { LandingPageStudio } from "./components/LandingPageStudio";
import Footer from "./components/footer"



function App() {


  return (
    <>
      <div className="bg-[#fdfdfd] sm:px-20 px-10 py-5">
        <Header />
      </div>
      <Hero />
      {/* <LandingPageStudio/> */}
    </>
  );
}

export default App
