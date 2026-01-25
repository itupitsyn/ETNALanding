'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { navigationLinks } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';

import { Navigation } from '../Navigation';

export const Footer: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <footer
      ref={ref}
      role="contentinfo"
      className="xs:gap-3.5 xs:py-4.75 relative container mb-5 flex flex-col py-3 lg:mb-6 lg:gap-6 lg:py-6"
    >
      <Navigation />

      <div className="gap xs:gap-x-8 xs:flex hidden flex-wrap gap-y-3 lg:gap-x-10.75 lg:gap-y-4">
        {navigationLinks.map((item, idx) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              'text-link cursor-pointer text-[14px] leading-[120%] font-light tracking-tight transition-colors hover:text-white lg:text-[18px]',
              isInView ? 'animate-appear-up' : 'opacity-0',
            )}
            style={{
              animationDelay: `${300 * idx}ms`,
            }}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </footer>
  );
};
