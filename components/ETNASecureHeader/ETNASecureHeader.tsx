import { FC } from 'react';

import { cn } from '@/lib/utils/cn';

import SecureLogo from '../../lib/assets/icons/etna-secure-logo.svg';

export const ETNASecureHeader: FC = () => {
  return (
    <div
      className={cn(
        'xs:max-h-117.5 xs:bg-size-[850px_auto] xs:bg-position-[50%_45px] xs:py-6',
        'relative container flex h-svh max-h-231.25 cursor-default flex-col items-start justify-end bg-[url(/images/secure-bg.png)] bg-size-[850px_auto] bg-position-[50%_55%] bg-no-repeat py-8',
        'lg:max-h-202.5 lg:bg-size-[1200px_auto] lg:bg-position-[50%_65px] lg:py-9',
        'before:absolute before:top-0 before:left-0 before:-z-1 before:h-full before:w-full before:bg-[linear-gradient(181.28deg,#050505_79.82%,#373737_137.68%,#575757_556.58%)]',
      )}
    >
      <SecureLogo className="xs:w-95.5 animate-appear-right absolute top-1/2 left-1/2 h-auto w-77 -translate-1/2 lg:w-140" />

      <p className="text-lighter animate-appear text-2xl leading-[110%] font-light tracking-tight whitespace-pre [animation-delay:300ms] lg:text-[28px]">
        {'Персональный VPS\nбез лишних шагов'}
      </p>
    </div>
  );
};
