import TextToHtml from "./components/TextToHtml";
import Logo from "./assets/logo.webp"

const App = () => {

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden">
      <img src={Logo} alt="" className="absolute top-0"/>
      <TextToHtml />
    </div>
  );
};

export default App;