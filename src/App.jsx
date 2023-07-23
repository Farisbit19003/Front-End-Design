import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Great from "./components/GreatSince/Great";
import Happy from "./components/Happy/Happy";
import Header from "./components/Header/Header";
import Help from "./components/Help/Help";
import Hero from "./components/Hero/Hero";
import OurClient from "./components/OurClient/OurClient";
import Subscribe from "./components/Subs/Subscribe";

function App() {
  return (
    <>
      <div className="h-screen">
        <div className="bg-[#FEFEFE] sm:px-20 px-10 py-5">
          <Header />
        </div>
        <Hero />
        <OurClient />
        <Help />
        <Great />
        <Happy />
        <Feedback />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
