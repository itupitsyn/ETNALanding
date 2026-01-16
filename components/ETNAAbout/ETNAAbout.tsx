import { FC } from 'react';

import { cn } from '@/utils/cn';

export const ETNAAbout: FC = () => {
  const bgClassName =
    "before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rotate-180 before:bg-[url(/etna-about-bg.png)] before:bg-cover before:bg-center before:bg-no-repeat before:content-['']";

  return (
    <div
      className={cn(
        'xs:px-5.5 xs:py-6 xs:h-97.5 xs:items-end relative container flex h-124.75 py-10.5 lg:h-152.5 lg:px-6 lg:py-8',
        bgClassName,
      )}
    >
      <p className="text-lighter xs:max-w-89.5 xs:text-[26px] xs:leading-7.75 max-w-76.25 text-[28px] leading-8 font-light tracking-tighter lg:max-w-152.5 lg:text-[42px] lg:leading-11.5">
        Мы — компания, где идеи превращаются в работающие и востребованные решения.
      </p>
    </div>
  );
};
