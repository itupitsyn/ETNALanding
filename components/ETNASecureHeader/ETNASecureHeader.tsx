import { FC } from 'react';

import { cn } from '@/lib/utils/cn';

import SecureLogo from '../../lib/assets/icons/etna-secure-logo.svg';

export const ETNASecureHeader: FC = () => {
  return (
    <header
      role="banner"
      className={cn(
        'xs:max-h-250 xs:bg-size-[1950px_auto] xs:bg-position-[53%_58%] xs:py-6',
        'relative container flex h-svh max-h-250 cursor-default flex-col items-start justify-end bg-[url(/images/secure-bg.jpg)] bg-size-[2300px_auto] bg-position-[52.5%_88%] bg-no-repeat py-8',
        'lg:max-h-350 lg:bg-size-[2850px_auto] lg:bg-position-[53%_65%] lg:py-9',
        'before:absolute before:top-0 before:left-0 before:-z-1 before:h-full before:w-full before:bg-[linear-gradient(181.28deg,#050505_79.82%,#373737_137.68%,#575757_556.58%)]',
      )}
    >
      <SecureLogo className="xs:w-95.5 xs:top-[52%] animate-appear-right absolute top-[48%] left-1/2 h-auto w-77 -translate-1/2 lg:top-1/2 lg:w-140" />

      <p className="text-lighter animate-appear-up text-2xl leading-[110%] font-light tracking-tighter whitespace-pre [animation-delay:300ms] lg:text-[28px]">
        {'Персональный VPS\nбез лишних шагов'}
      </p>
    </header>
  );
};
