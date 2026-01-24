'use client';

import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { ID_ABOUT } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';

export const ETNAAbout: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.7, triggerOnce: true });

  const bgClassName =
    "before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rotate-180 before:bg-[url(/images/etna-about-bg.webp)] before:bg-cover before:bg-center before:bg-no-repeat before:content-['']";

  return (
    <div
      className={cn(
        'xs:px-5.5 xs:py-6 xs:h-97.5 xs:items-end relative container flex h-124.75 cursor-default py-10.5 lg:h-152.5 lg:px-6 lg:py-8',
        bgClassName,
      )}
      id={ID_ABOUT}
    >
      <p
        ref={ref}
        className="text-lighter xs:hidden flex flex-col text-[28px] leading-[110%] font-light tracking-tighter"
      >
        <span className={cn(isInView ? 'animate-appear-up' : 'opacity-0')}>Мы — компания, </span>

        <span className={cn(isInView ? 'animate-appear-up [animation-delay:200ms]' : 'opacity-0')}>
          где идеи превращаются
        </span>

        <span className={cn(isInView ? 'animate-appear-up [animation-delay:400ms]' : 'opacity-0')}>в работающие</span>

        <span className={cn(isInView ? 'animate-appear-up [animation-delay:600ms]' : 'opacity-0')}>
          и востребованные
        </span>

        <span className={cn(isInView ? 'animate-appear-up [animation-delay:800ms]' : 'opacity-0')}>решения.</span>
      </p>

      <p
        ref={ref}
        className="text-lighter xs:text-[26px] xs:flex hidden flex-col text-[28px] leading-[110%] font-light tracking-tighter lg:text-[42px]"
      >
        <span className={cn(isInView ? 'animate-appear-up' : 'opacity-0')}>Мы — компания, где идеи </span>
        <span className={cn(isInView ? 'animate-appear-up [animation-delay:300ms]' : 'opacity-0')}>
          превращаются в работающие{' '}
        </span>
        <span className={cn(isInView ? 'animate-appear-up [animation-delay:600ms]' : 'opacity-0')}>
          и востребованные решения.
        </span>
      </p>
    </div>
  );
};
