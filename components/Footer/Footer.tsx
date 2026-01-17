import { FC } from 'react';

import { Navigation } from '../Navigation';

const links = [
  { id: 0, text: 'Политика конфиденциальности' },
  { id: 1, text: 'Согласие на рекламную рассылку' },
  { id: 2, text: 'Согласие на обработку персональных данных' },
  { id: 3, text: 'Юридическая информация' },
];

export const Footer: FC = () => {
  return (
    <footer className="xs:mt-26 xs:gap-3.5 relative container mt-14 mb-5 flex flex-col lg:mt-28.5 lg:mb-6 lg:gap-6">
      <Navigation />

      <div className="gap xs:gap-x-8 xs:flex hidden flex-wrap gap-y-3 lg:gap-x-10.75 lg:gap-y-4">
        {links.map((item) => (
          <button
            key={item.id}
            className="text-link cursor-pointer text-[14px] leading-[120%] tracking-tight transition-colors hover:text-white lg:text-[18px]"
          >
            {item.text}
          </button>
        ))}
      </div>
    </footer>
  );
};
