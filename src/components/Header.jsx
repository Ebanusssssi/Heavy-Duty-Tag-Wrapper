import Logo from "../assets/logo.webp"

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#191919]">
      <a href="https://heavyduty.com.ua" className=""><img src={Logo} alt="" className="w-32"/></a>
    </div>
  )
}

export default Header