import { FC } from 'react';

import { cn } from '@/utils/cn';

export const ETNAAbout: FC = () => {
  const bgClassName =
    "before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rotate-180 before:bg-[url(/etna-about-bg.png)] before:bg-cover before:bg-center before:bg-no-repeat before:content-['']";

  return (
    <div className={cn('relative container h-[499px] py-10.5', bgClassName)}>
      <p className="text-lighter max-w-[305px] text-[28px] leading-8 font-light tracking-tighter">
        Мы — компания, где идеи превращаются в работающие и востребованные решения.
      </p>
    </div>
  );
};
