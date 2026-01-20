'use client';

import { FC, Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils/cn';

interface FeaturesCommonProps {
  features: {
    id: number;
    header: string;
    text: string;
    textClassName?: string;
  }[];
}

export const FeaturesCommon: FC<FeaturesCommonProps> = ({ features }) => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} className="container overflow-auto px-5 py-8">
      <div className="xs:gap-3 xs:flex-row flex flex-col justify-between gap-2.5 lg:gap-5">
        {features.map((item, idx, list) => (
          <Fragment key={item.id}>
            <hr className="bg-border xs:hidden h-px" />
            <div
              style={{ animationDelay: `${300 * idx}ms` }}
              className={cn(
                'xs:border-t xs:border-b xs:border-solid xs:border-border xs:w-55 xs:min-h-52.25 xs:px-3 xs:py-4 xs:gap-20',
                'flex min-h-73.5 flex-none grow flex-col gap-30 px-4 py-5.5',
                'lg:min-h-83.75 lg:gap-27.5 lg:px-5.5 lg:py-7',
                isInView ? 'animate-appear' : 'opacity-0',
              )}
            >
              <h2 className="xs:text-[26px] text-[32px] leading-[110%] tracking-tight whitespace-pre lg:text-5xl">
                {item.header}
              </h2>

              <p
                className={cn('xs:text-sm leading-[120%] font-light tracking-tighter lg:text-2xl', item.textClassName)}
              >
                {item.text}
              </p>
            </div>

            {idx < list.length - 1 && <div className="bg-border xs:block hidden w-px flex-none" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
