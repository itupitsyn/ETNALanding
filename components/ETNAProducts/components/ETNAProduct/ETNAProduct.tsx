'use client';

import Link from 'next/link';
import { cloneElement, ComponentPropsWithRef, FC, ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils/cn';

interface ETNAProductProps {
  className?: string;
  href: string;
  logo: ReactElement<ComponentPropsWithRef<'div'>>;
  text: string;
  animationDelay?: number;
}

export const ETNAProduct: FC<ETNAProductProps> = ({ className, href, logo, text, animationDelay = 0 }) => {
  const [refL, isInViewL] = useInView({ threshold: 1, triggerOnce: true });
  const [refT, isInViewT] = useInView({ threshold: 0.5, triggerOnce: true });

  const logoCloned = cloneElement(logo, {
    ref: refL,
    style: {
      animationDelay: `${animationDelay}ms`,
    },
    className: cn(logo.props.className, isInViewL ? 'animate-appear-up' : 'opacity-0'),
  });

  return (
    <Link
      href={href}
      className={cn(
        'xs:aspect-auto xs:h-97.75 xs:px-2.5 xs:py-3 xs:grow relative flex h-97 flex-col items-start justify-end overflow-hidden px-6 py-5.5 hover:cursor-pointer lg:h-173.5 lg:px-4.5 lg:py-5.5',
        'tap-none transition-transform duration-300 hover:scale-103 active:scale-97',
        className,
      )}
    >
      {logoCloned}
      <p
        ref={refT}
        className={cn(
          'text-lighter xs:text-base tap-none text-[22px] leading-[110%] font-light tracking-tighter whitespace-pre lg:text-[28px]',
          isInViewT ? 'animate-appear-right' : 'opacity-0',
        )}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        {text}
      </p>
    </Link>
  );
};
