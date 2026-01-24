import Link from 'next/link';
import { FC } from 'react';

import { cn } from '@/lib/utils/cn';

import { AboutUsLink } from './components/AboutUsLink';
import { BurgerMenu } from './components/BurgerMenu';
import { ProjectsLink } from './components/ProjectsLink';

interface NavigationProps {
  className?: string;
}

export const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <nav
      role="navigation"
      className={cn(
        'text-lighter xs:top-3 flex w-full justify-between gap-2 font-light tracking-tighter lg:top-6 lg:text-xl',
        className,
      )}
    >
      <div className="xs:gap-10.5 flex gap-8 lg:gap-27">
        <Link href="/" className="animate-appear-down transition-colors hover:text-white">
          <span className="font-bold">ETNA</span>
          <span>SOFTWARE</span>
        </Link>
        <ul className="xs:flex hidden gap-8 whitespace-nowrap lg:gap-10.75">
          <li className="animate-appear-down [animation-delay:300ms]">
            <AboutUsLink />
          </li>
          <li className="animate-appear-down [animation-delay:600ms]">
            <ProjectsLink />
          </li>
        </ul>
      </div>

      <Link
        href="mailto:corp@etna.software"
        className="xs:block animate-appear-down hidden transition-colors [animation-delay:200ms] hover:text-white"
      >
        corp@etna.software
      </Link>

      <BurgerMenu className="xs:hidden lg:text-2xl" />
    </nav>
  );
};
