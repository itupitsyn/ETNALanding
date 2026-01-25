'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils/cn';

import neuroLogo from '../../public/images/neuro-set-logo-bg.webp';

export const NeuroSetHeader: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <header
      ref={ref}
      role="banner"
      className={cn(
        'xs:max-h-350 xs:py-6',
        'relative container flex h-svh max-h-350 cursor-default flex-col items-start justify-end overflow-hidden bg-[radial-gradient(48.22%_119.67%_at_-10.36%_78.1%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)] bg-no-repeat py-8',
        'lg:max-h-350 lg:py-9',
      )}
    >
      <Image
        src={neuroLogo}
        alt=""
        className={cn(
          'xs:left-[calc(50%+3px)] xs:w-55.75 xs:-translate-x-[8%] xs:-translate-y-[45%]',
          'absolute top-1/2 left-[calc(50%+7px)] h-auto w-46.75 -translate-x-[15%] -translate-y-1/2',
          'lg:left-[calc(50%+14px)] lg:w-77 lg:-translate-x-[7%] lg:-translate-y-[46%]',
          isInView ? 'animate-appear-left' : 'opacity-0',
        )}
      />

      <div
        className={cn(
          'xs:text-[70px] xs:-translate-x-[58%] xs:-translate-y-[27%] xs:gap-8',
          'font-pt-root absolute top-1/2 left-1/2 flex -translate-x-[61%] -translate-y-[50%] gap-7 text-[58px] leading-none',
          'lg:-translate-x-[55%] lg:-translate-y-[30%] lg:gap-12 lg:text-[96px]',
          isInView ? 'animate-appear-right' : 'opacity-0',
        )}
      >
        <span className="bg-[linear-gradient(337.78deg,rgba(89,96,112,0)_38.41%,rgba(89,96,112,0.8)_106.93%),linear-gradient(0deg,#E6E6E6,#E6E6E6)] bg-clip-text tracking-tighter text-transparent">
          Нейро
        </span>
        <span className="text-lighter relative tracking-tighter">Set</span>
      </div>

      <p
        className={cn(
          'text-lighter text-2xl leading-[110%] font-light tracking-tighter whitespace-pre lg:text-[28px]',
          isInView ? 'animate-appear-up [animation-delay:300ms]' : 'opacity-0',
        )}
      >
        {'Единая платформа\nдля работы с ИИ'}
      </p>
    </header>
  );
};
