import { FC } from 'react';

import { cn } from '@/lib/utils/cn';

import ETNALogo from '../../lib/assets/icons/etna-logo.svg';
import { ContactUsButton } from './components/ContactUsButton';

export const ETNAHeader: FC = () => {
  return (
    <header
      role="banner"
      className={cn(
        'relative container h-svh w-full bg-[linear-gradient(0deg,rgba(8,19,30,0)_78.02%,rgba(8,19,30,0.72)_90.97%)] bg-position-[0px_-10px] bg-no-repeat',
        "xs:before:bg-position-[50%_70%] before:bg-size[2000px_auto] cursor-default before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rotate-180 before:bg-[url(/images/etna-logo-bg-optimized.webp)] before:bg-bottom before:bg-no-repeat before:content-[''] lg:before:bg-position-[30%_80%]",
        'xs:before:max-h-117.75 before:max-h-231.25 lg:before:max-h-202.5',
        'xs:max-h-117.75 max-h-231.25 lg:max-h-202.5',
      )}
    >
      <div className="xs:pb-4.5 flex h-full flex-col justify-end pb-14 lg:pb-8">
        <div className="xs:flex-row xs:items-end xs:justify-between xs:gap-y-0 flex flex-col gap-x-4 gap-y-21">
          <div className="xs:flex-row xs:items-end xs:gap-y-4 xs:gap-4 flex shrink flex-col items-start gap-4.5 lg:gap-6">
            <ETNALogo className="text-lighter xs:w-76.5 xs:h-22 animate-appear-right max-w-full lg:h-28.5 lg:w-98.5" />

            <div className="text-lighter xs:text-[clamp(0.5rem,3vw,1.75rem)] shrink text-2xl leading-[110%] font-light tracking-tighter whitespace-pre lg:text-[28px]">
              <p className="animate-appear [animation-delay:300ms]">Создаём цифровые</p>
              <p className="animate-appear [animation-delay:600ms]">продукты, которые меняют</p>
              <p className="animate-appear [animation-delay:900ms]">жизнь к лучшему</p>
            </div>
          </div>

          <ContactUsButton />
        </div>
      </div>
    </header>
  );
};
