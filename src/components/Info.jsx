import { useState } from 'react';

import { FiInfo } from "react-icons/fi";

const InfoIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <FiInfo className='text-white text-lg' />
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '150%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#DB011C',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
          }}
        >
          <ul className="text-start">
            <li className="text-sm text-white/80">Просто текст для заголовкiв <span className="text-white font-semibold">&quot;Заголовок&quot;</span></li>
            <li className="text-sm text-white/80"><span className="text-white font-semibold">&quot;- (мiнус)&quot;</span> для пунктiв списку <span className="text-white font-semibold">&quot;-Пункт&quot;</span></li>
            <li className="text-sm text-white/80">Кожен <span className="text-white font-semibold">&quot;тег&quot;</span> з <span className="text-white font-semibold">нового рядка</span></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfoIcon;
