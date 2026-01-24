import Image from 'next/image';
import { FC } from 'react';

import { cn } from '@/lib/utils/cn';

import neuroLogo from '../../public/images/neuro-set-logo-bg.webp';

export const NeuroSetHeader: FC = () => {
  return (
    <header
      role="banner"
      className={cn(
        'xs:max-h-117.5 xs:py-6',
        'relative container flex h-svh max-h-231.25 cursor-default flex-col items-start justify-end overflow-hidden bg-[radial-gradient(48.22%_119.67%_at_-10.36%_78.1%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)] bg-no-repeat py-8',
        'lg:max-h-202.5 lg:py-9',
      )}
    >
      <Image
        src={neuroLogo}
        alt=""
        className="animate-appear-right xs:left-[calc(50%+3px)] xs:w-55.75 absolute top-1/2 left-[calc(50%+7px)] h-auto w-46.75 -translate-y-1/2 lg:left-[calc(50%+14px)] lg:w-77"
      />

      <div className="animate-appear-right font-pt-root xs:text-[70px] absolute top-1/2 left-1/2 flex -translate-1/2 gap-4.5 text-[58px] leading-none tracking-tight lg:text-[96px]">
        <span className="bg-[linear-gradient(337.78deg,rgba(89,96,112,0)_38.41%,rgba(89,96,112,0.8)_106.93%),linear-gradient(0deg,#E6E6E6,#E6E6E6)] bg-clip-text text-transparent">
          Нейро
        </span>
        <span className="text-lighter relative">Set</span>
      </div>

      <p className="animate-appear-up text-lighter text-2xl leading-[110%] font-light tracking-tight whitespace-pre [animation-delay:300ms] lg:text-[28px]">
        {'Единая платформа\nдля работы с ИИ'}
      </p>
    </header>
  );
};
