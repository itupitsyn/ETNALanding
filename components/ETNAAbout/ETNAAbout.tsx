'use client';

import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { ID_ABOUT } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';

export const ETNAAbout: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const bgClassName =
    "before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rotate-180 before:bg-[url(/images/etna-about-bg.png)] before:bg-cover before:bg-center before:bg-no-repeat before:content-['']";

  return (
    <div
      ref={ref}
      className={cn(
        'xs:px-5.5 xs:py-6 xs:h-97.5 xs:items-end relative container flex h-124.75 py-10.5 lg:h-152.5 lg:px-6 lg:py-8',
        bgClassName,
      )}
      id={ID_ABOUT}
    >
      <div className="text-lighter xs:text-[26px] xs:flex flex-col text-[28px] leading-[110%] font-light tracking-tighter lg:text-[42px]">
        <span className={cn(isInView ? 'animate-appear' : 'opacity-0')}>Мы — компания, где идеи </span>
        <span className={cn(isInView ? 'animate-appear [animation-delay:300ms]' : 'opacity-0')}>
          превращаются в работающие{' '}
        </span>
        <span className={cn(isInView ? 'animate-appear [animation-delay:600ms]' : 'opacity-0')}>
          и востребованные решения.
        </span>
      </div>
    </div>
  );
};
