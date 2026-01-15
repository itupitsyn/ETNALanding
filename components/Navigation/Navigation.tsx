import Link from 'next/link';
import { FC } from 'react';

import { BurgerMenu } from './components/BurgerMenu';

export const Navigation: FC = () => {
  return (
    <div className="absolute top-5 left-0 w-full">
      <nav className="text-lighter xs:top-3 container flex w-full justify-between gap-2 py-3 font-light tracking-tighter lg:top-6 lg:text-xl">
        <div className="xs:gap-10.5 flex gap-8 lg:gap-27">
          <p>
            <span className="font-bold">ETNA</span>
            <span>SOFTWARE</span>
          </p>
          <ul className="xs:flex hidden gap-8 whitespace-nowrap lg:gap-10.75">
            <li>
              <Link href="#">О нас</Link>
            </li>
            <li>
              <Link href="#">Проекты</Link>
            </li>
          </ul>
        </div>

        <Link href="mailto:corp@etna.software" className="xs:block hidden transition-colors hover:text-white">
          corp@etna.software
        </Link>

        <BurgerMenu className="xs:hidden lg:text-2xl" />
      </nav>
    </div>
  );
};
