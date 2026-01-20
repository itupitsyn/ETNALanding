'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { ID_PROJECTS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';

import SecureLogo from '../../lib/assets/icons/etna-secure-logo.svg';
import MovemateLogo from '../../lib/assets/icons/movemate-logo.svg';
import neuroLogo from '../../public/images/neuro-set-logo-bg.png';

export const ETNAProducts: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const commonCardClass = cn(
    'xs:aspect-auto xs:h-[391px] xs:px-2.5 xs:py-3 xs:grow relative flex aspect-square flex-col items-start justify-end px-6 py-5.5 overflow-hidden lg:px-4.5 lg:py-5.5 lg:h-[694px] hover:cursor-pointer',
    'transition-transform duration-300 hover:scale-103',
  );

  return (
    <div ref={ref} id={ID_PROJECTS} className="xs:flex-row container flex flex-col gap-2.5 py-8 lg:gap-4 lg:pb-10.5">
      <Link
        href="/movemate"
        className={cn(
          'xs:bg-size-[2000px_auto] bg-[url(/images/movemate-bg.png)] bg-size-[1500px_auto] bg-position-[53%_40%] bg-no-repeat hover:bg-[linear-gradient(0deg,#9C9C9C4D,#9C9C9C4D),url(/images/movemate-bg.png)]',
          commonCardClass,
        )}
      >
        <MovemateLogo
          className={cn(
            'xs:w-43.25 absolute top-1/2 left-1/2 h-auto -translate-1/2 lg:w-69.5',
            isInView ? 'animate-appear' : 'opacity-0',
          )}
        />

        <p
          className={cn(
            'text-lighter xs:text-base text-[22px] leading-[110%] tracking-tight whitespace-pre lg:text-[28px]',
            isInView ? 'animate-appear-right' : 'opacity-0',
          )}
        >
          {'Онлайн-сервис\nдля бронирования'}
        </p>
      </Link>

      <Link
        href="/etna-secure"
        className={cn(
          'xs:bg-center bg-black bg-[url(/images/secure-bg.png)] bg-size-[700px_auto] bg-top bg-no-repeat hover:bg-[linear-gradient(0deg,#9C9C9C4D,#9C9C9C4D),url(/images/secure-bg.png)]',
          commonCardClass,
        )}
      >
        <SecureLogo
          className={cn(
            'xs:w-43.25 absolute top-1/2 left-1/2 h-auto -translate-1/2 lg:w-69.5',
            isInView ? 'animate-appear [animation-delay:300ms]' : 'opacity-0',
          )}
        />

        <p
          className={cn(
            'text-lighter xs:text-base text-[22px] leading-[110%] tracking-tight whitespace-pre lg:text-[28px]',
            isInView ? 'animate-appear-right [animation-delay:200ms]' : 'opacity-0',
          )}
        >
          {'Персональный VPS\nбез лишних шагов'}
        </p>
      </Link>

      <Link
        href="/neuro-set"
        className={cn(
          'group bg-[radial-gradient(77.09%_179.29%_at_-19.41%_94.55%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)] hover:bg-[linear-gradient(0deg,#9C9C9C4D,#9C9C9C4D),radial-gradient(77.09%_179.29%_at_-19.41%_94.55%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)]',
          commonCardClass,
        )}
      >
        <Image
          src={neuroLogo}
          alt=""
          className={cn(
            'xs:left-[calc(50%+3px)] absolute top-1/2 left-[calc(50%+7px)] h-47.25 w-31.5 -translate-y-1/2 lg:left-[calc(50%+14px)] lg:h-68.25 lg:w-45.5',
            isInView ? 'animate-appear [animation-delay:600ms]' : 'opacity-0',
          )}
        />
        <div className="xs:left-[calc(50%+3px)] group-hover:bg-card-hover-bg/30 absolute top-1/2 left-[calc(50%+7px)] h-47.25 w-31.5 -translate-y-1/2 lg:left-[calc(50%+14px)] lg:h-68.25 lg:w-45.5" />

        <div
          className={cn(
            'font-pt-root xs:text-[32px] absolute top-1/2 left-1/2 flex -translate-1/2 gap-4.5 text-[40px] leading-none tracking-tight lg:text-[56px]',
            isInView ? 'animate-appear [animation-delay:600ms]' : 'opacity-0',
          )}
        >
          <span className="bg-[linear-gradient(337.78deg,rgba(89,96,112,0)_38.41%,rgba(89,96,112,0.8)_106.93%),linear-gradient(0deg,#E6E6E6,#E6E6E6)] bg-clip-text text-transparent">
            Нейро
          </span>
          <span className="text-lighter relative">Set</span>
        </div>

        <p
          className={cn(
            'text-lighter xs:text-base z-1 text-[22px] leading-[110%] tracking-tight whitespace-pre lg:text-[28px]',
            isInView ? 'animate-appear-right [animation-delay:400ms]' : 'opacity-0',
          )}
        >
          {'Единая платформа\nдля работы с ИИ'}
        </p>
      </Link>
    </div>
  );
};
