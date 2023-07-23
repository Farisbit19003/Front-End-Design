import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Great from "./components/GreatSince/Great";
import Happy from "./components/Happy/Happy";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Hero from "./components/Hero/Hero";
import { LandingPageStudio } from "./components/LandingPageStudio";
import LandingPageStudio2 from "./components/LandingPageStudio2";
import OurClient from "./components/OurClient/OurClient";
import Subscribe from "./components/Subs/Subscribe";

function App() {
  return (
    <>
      <div className="h-screen">
        {" "}
        <div className="bg-[#FEFEFE] sm:px-20 px-10 py-5">
          <Header />
        </div>
        <Hero />
        <OurClient />
        <Help />
        <Great />
        <Happy />
        <Feedback />
        <Subscribe/>
        <Footer />
      </div>

      {/* <div className="border-2 h-screen border-red-500 grid  grid-cols-5 items-center justify-items-center">
        <div className="h-24 w-24 flex  bg-green-700">FARIS</div>
        <div className="h-24 w-24 flex  bg-green-700">FARIS</div>
        <div className="h-24 w-24 flex bg-green-700">FARIS</div>
        <div className="h-24 w-24 flex  bg-green-700">FARIS</div>
        <div className="h-24 w-24 flex  bg-green-700">FARIS</div>


      </div> */}
      {/* <LandingPageStudio/> */}
      {/* <LandingPageStudio2/> */}
    </>
  );
}

export default App;
