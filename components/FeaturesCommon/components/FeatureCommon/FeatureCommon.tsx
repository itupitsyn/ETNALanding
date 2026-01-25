import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils/cn';

interface FeatureCommonProps {
  header: string;
  text: string;
  className?: string;
  textClassName?: string;
  delayMultiplier?: number;
}

export const FeatureCommon: FC<FeatureCommonProps> = ({
  header,
  text,
  className,
  delayMultiplier = 0,
  textClassName,
}) => {
  const [refH, isInViewH] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refT, isInViewT] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      className={cn(
        'xs:w-55 xs:min-h-52.25 xs:px-3 xs:py-4 xs:gap-20',
        'flex min-h-73.5 flex-none grow flex-col gap-30 px-4 py-5.5',
        'lg:min-h-83.75 lg:gap-27.5 lg:px-5.5 lg:py-7',
        className,
      )}
    >
      <h2
        ref={refH}
        className={cn(
          'xs:text-[26px] text-[32px] leading-[110%] tracking-tighter whitespace-pre lg:text-5xl',
          isInViewH ? 'animate-appear-up' : 'opacity-0',
        )}
        style={{ animationDelay: `${300 * delayMultiplier}ms` }}
      >
        {header}
      </h2>

      <p
        ref={refT}
        className={cn(
          'xs:text-sm leading-[120%] font-light tracking-tighter lg:text-2xl',
          isInViewT ? 'animate-appear-up' : 'opacity-0',
          textClassName,
        )}
        style={{ animationDelay: `${300 * delayMultiplier + 300}ms` }}
      >
        {text}
      </p>
    </div>
  );
};
