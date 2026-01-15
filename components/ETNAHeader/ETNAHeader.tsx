import { FC } from 'react';

import { cn } from '@/utils/cn';

import ETNALogo from '../../assets/icons/etna-logo.svg';
import { Button } from '../ui/Button';

export const ETNAHeader: FC = () => {
  const maxHclassName = 'max-h-231.25 xs:max-h-[471px] lg:max-h-202.5';
  const bgClassName =
    "before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rotate-180 before:bg-[url(/etna-logo-bg-optimized.png)] before:bg-top before:bg-no-repeat before:content-['']";
  const bgMaxHclassName = 'before:max-h-231.25 xs:before:max-h-[471px] lg:before:max-h-202.5';

  return (
    <div
      className={cn(
        'xs:pb-4.5 flex h-screen w-full flex-col justify-end pb-14',
        bgClassName,
        maxHclassName,
        bgMaxHclassName,
      )}
    >
      <div className="xs:flex-row xs:items-end xs:justify-start xs:flex-wrap xs:gap-y-4 container flex flex-col items-start">
        <ETNALogo className="text-lighter xs:w-76.5 xs:h-22 max-w-full flex-none lg:h-28.5 lg:w-98.5" />

        <p className="text-lighter xs:mt-0 xs:ml-4.25 mt-4 text-2xl leading-none font-light tracking-tighter whitespace-pre-wrap lg:text-[28px]">
          {'Создаём цифровые\nпродукты, которые меняют\nжизнь к лучшему'}
        </p>

        <Button className="xs:self-end xs:mt-0 xs:ml-auto xs:py-4 mt-21 self-stretch px-10.25 py-3.75 lg:px-12 lg:py-6">
          Связаться
        </Button>
      </div>
    </div>
  );
};
