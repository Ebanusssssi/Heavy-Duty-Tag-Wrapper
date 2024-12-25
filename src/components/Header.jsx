import Logo from "../assets/logo.webp"

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#191919]">
      <img src={Logo} alt="" className="w-32"/>
      <div className="text-center">
        <p className="text-sm text-white/20">Просто текст для заголовкiв "Заголовок"</p>
        <p className="text-sm text-white/20">"-" для пунктiв списку "-Пункт"</p>
      </div>
    </div>
  )
}

export default Header