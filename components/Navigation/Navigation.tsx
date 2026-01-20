import Link from 'next/link';
import { FC } from 'react';

import { ID_ABOUT, ID_PROJECTS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';
import { safeScroll } from '@/lib/utils/scroll';

import { AboutUsLink } from './components/AboutUsLink';
import { BurgerMenu } from './components/BurgerMenu';
import { ProjectsLink } from './components/ProjectsLink';

interface NavigationProps {
  className?: string;
}

export const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <nav
      className={cn(
        'text-lighter xs:top-3 flex w-full justify-between gap-2 font-light tracking-tighter lg:top-6 lg:text-xl',
        className,
      )}
    >
      <div className="xs:gap-10.5 flex gap-8 lg:gap-27">
        <Link href="/" className="transition-colors hover:text-white">
          <span className="font-bold">ETNA</span>
          <span>SOFTWARE</span>
        </Link>
        <ul className="xs:flex hidden gap-8 whitespace-nowrap lg:gap-10.75">
          <li>
            <AboutUsLink />
          </li>
          <li>
            <ProjectsLink />
          </li>
        </ul>
      </div>

      <Link href="mailto:corp@etna.software" className="xs:block hidden transition-colors hover:text-white">
        corp@etna.software
      </Link>

      <BurgerMenu className="xs:hidden lg:text-2xl" />
    </nav>
  );
};
