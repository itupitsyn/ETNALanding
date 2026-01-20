import Link from 'next/link';
import { FC } from 'react';

import { navigationLinks } from '@/lib/constants/navigation';

import { Navigation } from '../Navigation';

export const Footer: FC = () => {
  return (
    <footer className="xs:mt-26 xs:gap-3.5 relative container mt-14 mb-5 flex flex-col lg:mt-28.5 lg:mb-6 lg:gap-6">
      <Navigation />

      <div className="gap xs:gap-x-8 xs:flex hidden flex-wrap gap-y-3 lg:gap-x-10.75 lg:gap-y-4">
        {navigationLinks.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="text-link cursor-pointer text-[14px] leading-[120%] tracking-tight transition-colors hover:text-white lg:text-[18px]"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </footer>
  );
};
