import Footer from "./components/Footer";
import Header from "./components/Header";
import TextToHtml from "./components/TextToHtml";


const App = () => {

  return (
    <div className="h-screen w-full flex flex-col justify-between bg-[#191919]">
      <Header />
      <TextToHtml />
      <Footer />
    </div>
  );
};

export default App;