'use client';

import Image from 'next/image';
import { FC } from 'react';

import { ID_PROJECTS } from '@/lib/constants/navigation';
import { useIsMobile } from '@/lib/hooks/useIsMoblile';
import { cn } from '@/lib/utils/cn';

import SecureLogo from '../../lib/assets/icons/etna-secure-logo.svg';
import MovemateLogo from '../../lib/assets/icons/movemate-logo.svg';
import neuroLogo from '../../public/images/neuro-set-logo-bg.webp';
import { ETNAProduct } from './components/ETNAProduct';

export const ETNAProducts: FC = () => {
  const isMobile = useIsMobile();

  return (
    <div id={ID_PROJECTS} className="xs:flex-row container flex flex-col gap-2.5 py-8 lg:gap-4 lg:pb-10.5">
      <ETNAProduct
        href="/movemate"
        className={cn(
          'relative before:absolute before:top-[-25%] before:left-[-50%] before:-z-1 before:h-[200%] before:w-[200%] before:content-[""]',
          'xs:before:-rotate-8 xs:before:bg-size-[1520px_auto] xs:before:bg-position-[50%_85%]',
          'before:bg-[url(/images/movemate-bg.webp)] before:bg-size-[1500px_auto] before:bg-position-[53%_110%] before:bg-no-repeat hover:before:bg-[linear-gradient(0deg,#9C9C9C4D,#9C9C9C4D),url(/images/movemate-bg.webp)]',
          'lg:before:-rotate-8 lg:before:bg-size-[2700px_auto] lg:before:bg-position-[50%_85%]',
        )}
        logo={<MovemateLogo className="xs:w-40 tap-none absolute top-1/2 left-1/2 h-auto -translate-1/2 lg:w-69.5" />}
        text={'Онлайн-сервис\nдля бронирования'}
      />

      <ETNAProduct
        href="/etna-secure"
        className={cn(
          'xs:bg-size-[1350px_auto] xs:bg-position-[55%_65%]',
          'bg-black bg-[url(/images/secure-bg.jpg)] bg-size-[1800px_auto] bg-position-[53%_55%] bg-no-repeat hover:bg-[linear-gradient(0deg,#9C9C9C4D,#9C9C9C4D),url(/images/secure-bg.jpg)]',
          'lg:bg-size-[2400px_auto] lg:bg-position-[55%_65%]',
        )}
        logo={<SecureLogo className="xs:w-40 tap-none absolute top-1/2 left-1/2 h-auto -translate-1/2 lg:w-69.5" />}
        text={'Персональный VPS\nбез лишних шагов'}
        animationDelay={!isMobile ? 300 : 0}
      />

      <ETNAProduct
        href="/neuro-set"
        className={cn(
          'group bg-[radial-gradient(77.09%_179.29%_at_-25.41%_154.55%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)] hover:bg-[linear-gradient(0deg,#9C9C9C4D,#9C9C9C4D),radial-gradient(77.09%_179.29%_at_-19.41%_94.55%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)]',
        )}
        logo={
          <div
            className={cn(
              'xs:-translate-x-[65%] xs:text-[32px] xs:gap-4',
              'font-pt-root tap-none absolute top-1/2 left-1/2 flex -translate-x-[55%] -translate-y-[30%] gap-4 text-[40px] leading-none',
              'lg:-translate-x-[61%] lg:gap-7 lg:text-[56px]',
            )}
          >
            <Image
              src={neuroLogo}
              alt=""
              className="xs:left-[calc(50%+3px)] xs:h-38.5 xs:w-25.5 tap-none absolute top-1/2 left-[calc(50%+7px)] h-47.25 w-31.5 -translate-y-1/2 lg:left-[calc(50%+10px)] lg:h-68.25 lg:w-45.5"
            />
            <div className="xs:left-[calc(50%+3px)] xs:h-38.5 xs:w-25.5 group-hover:bg-card-hover-bg/30 tap-none absolute top-1/2 left-[calc(50%+7px)] h-47.25 w-31.5 -translate-y-1/2 lg:left-[calc(50%+10px)] lg:h-68.25 lg:w-45.5" />

            <span className="z-1 bg-[linear-gradient(337.78deg,rgba(89,96,112,0)_38.41%,rgba(89,96,112,0.8)_106.93%),linear-gradient(0deg,#E6E6E6,#E6E6E6)] bg-clip-text tracking-tighter text-transparent">
              Нейро
            </span>
            <span className="text-lighter relative tracking-tight">Set</span>
          </div>
        }
        text={'Единая платформа\nдля работы с ИИ'}
        animationDelay={!isMobile ? 600 : 0}
      />
    </div>
  );
};
