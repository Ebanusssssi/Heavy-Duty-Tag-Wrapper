import { FaCode } from "react-icons/fa6";

const Footer = () => {
  const email = 'kolisnichenkov001@gmail.com'; // Адрес почты
  const subject = 'Предложение о сотрудничестве'; // Тема письма
  const body = 'Здравствуйте хочу обсудить проект. [Ваше сообщение здесь]'; // Текст письма

  // Формируем ссылку mailto
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  return (
    <a href={mailtoLink} className='w-full pt-2 pb-4 flex justify-center gap-1 items-center bg-[#191919] group'>
      <FaCode className="text-sm text-white/5 group-hover:text-white/20 " />
      <p className='text-sm font-mono text-white/5 group-hover:text-white/20 '>Vadim Kolisnichenko</p>
    </a>
  )
}

export default Footer