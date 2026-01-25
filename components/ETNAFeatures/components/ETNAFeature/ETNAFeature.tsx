'use client';

import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils/cn';

interface ETNAFeatureProps {
  header: string;
  text: string;
  className?: string;
  textClassName?: string;
  delayMultiplier?: number;
}

export const ETNAFeature: FC<ETNAFeatureProps> = ({ header, text, className, textClassName, delayMultiplier = 0 }) => {
  const [refH, isInViewH] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refT, isInViewT] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      className={cn(
        'xs:gap-11 xs:w-62 xs:min-h-61.5 xs:px-3 xs:py-4 flex min-h-85 w-90 max-w-[80svw] min-w-55 flex-none grow flex-col gap-22.5 overflow-hidden px-4 py-5.5 lg:min-h-110 lg:w-111.75 lg:gap-27.5 lg:px-5.5 lg:py-7',
        className,
      )}
    >
      <h2
        style={{
          animationDelay: `${delayMultiplier * 500}ms`,
        }}
        ref={refH}
        className={cn(
          'xs:text-[26px] text-[32px] leading-[110%] tracking-tighter whitespace-pre lg:text-5xl',
          isInViewH ? 'animate-appear-up' : 'opacity-0',
        )}
      >
        {header}
      </h2>
      <p
        ref={refT}
        style={{
          animationDelay: `${delayMultiplier * 500 + 300}ms`,
        }}
        className={cn(
          'xs:text-xs leading-[120%] font-light tracking-tighter lg:text-xl',
          isInViewT ? 'animate-appear-up' : 'opacity-0',
          textClassName,
        )}
      >
        {text}
      </p>
    </div>
  );
};
