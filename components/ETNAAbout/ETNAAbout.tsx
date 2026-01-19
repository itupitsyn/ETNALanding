import { FC } from 'react';

import { ID_ABOUT } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';

export const ETNAAbout: FC = () => {
  const bgClassName =
    "before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rotate-180 before:bg-[url(/images/etna-about-bg.png)] before:bg-cover before:bg-center before:bg-no-repeat before:content-['']";

  return (
    <div
      className={cn(
        'xs:px-5.5 xs:py-6 xs:h-97.5 xs:items-end relative container flex h-124.75 py-10.5 lg:h-152.5 lg:px-6 lg:py-8',
        bgClassName,
      )}
      id={ID_ABOUT}
    >
      <p className="text-lighter xs:max-w-89.5 xs:text-[26px] max-w-76.25 text-[28px] leading-[110%] font-light tracking-tighter lg:max-w-152.5 lg:text-[42px]">
        Мы — компания, где идеи превращаются в работающие и востребованные решения.
      </p>
    </div>
  );
};
