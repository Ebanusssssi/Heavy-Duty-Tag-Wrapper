import Logo from "../assets/logo.webp"

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#191919]">
      <img src={Logo} alt="" className="w-32"/>
    </div>
  )
}

export default Header