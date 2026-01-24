'use client';

import Image from 'next/image';
import { FC } from 'react';

import { ID_PROJECTS } from '@/lib/constants/navigation';
import { useIsMobile } from '@/lib/hooks/useIsMoblile';

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
        className="xs:bg-size-[2000px_auto] bg-[url(/images/movemate-bg.webp)] bg-size-[1500px_auto] bg-position-[53%_40%] bg-no-repeat hover:bg-[linear-gradient(0deg,#9C9C9C4D,#9C9C9C4D),url(/images/movemate-bg.webp)]"
        logo={
          <MovemateLogo className="xs:w-43.25 tap-none absolute top-1/2 left-1/2 h-auto -translate-1/2 lg:w-69.5" />
        }
        text={'Онлайн-сервис\nдля бронирования'}
      />

      <ETNAProduct
        href="/etna-secure"
        className="xs:bg-center bg-black bg-[url(/images/secure-bg.webp)] bg-size-[700px_auto] bg-top bg-no-repeat hover:bg-[linear-gradient(0deg,#9C9C9C4D,#9C9C9C4D),url(/images/secure-bg.webp)]"
        logo={<SecureLogo className="xs:w-43.25 tap-none absolute top-1/2 left-1/2 h-auto -translate-1/2 lg:w-69.5" />}
        text={'Персональный VPS\nбез лишних шагов'}
        animationDelay={!isMobile ? 300 : 0}
      />

      <ETNAProduct
        href="/neuro-set"
        className="group bg-[radial-gradient(77.09%_179.29%_at_-19.41%_94.55%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)] hover:bg-[linear-gradient(0deg,#9C9C9C4D,#9C9C9C4D),radial-gradient(77.09%_179.29%_at_-19.41%_94.55%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)]"
        logo={
          <div className="font-pt-root xs:text-[32px] tap-none absolute top-1/2 left-1/2 flex -translate-1/2 gap-4.5 text-[40px] leading-none tracking-tight lg:text-[56px]">
            <Image
              src={neuroLogo}
              alt=""
              className="xs:left-[calc(50%+3px)] tap-none absolute top-1/2 left-[calc(50%+7px)] h-47.25 w-31.5 -translate-y-1/2 lg:left-[calc(50%+14px)] lg:h-68.25 lg:w-45.5"
            />
            <div className="xs:left-[calc(50%+3px)] group-hover:bg-card-hover-bg/30 tap-none absolute top-1/2 left-[calc(50%+7px)] h-47.25 w-31.5 -translate-y-1/2 lg:left-[calc(50%+14px)] lg:h-68.25 lg:w-45.5" />

            <span className="z-1 bg-[linear-gradient(337.78deg,rgba(89,96,112,0)_38.41%,rgba(89,96,112,0.8)_106.93%),linear-gradient(0deg,#E6E6E6,#E6E6E6)] bg-clip-text text-transparent">
              Нейро
            </span>
            <span className="text-lighter relative">Set</span>
          </div>
        }
        text={'Единая платформа\nдля работы с ИИ'}
        animationDelay={!isMobile ? 600 : 0}
      />
    </div>
  );
};
