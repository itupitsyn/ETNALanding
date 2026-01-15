import Image from 'next/image';
import { FC } from 'react';

import SecureLogo from '../../assets/icons/etna-secure-logo.svg';
import neuroLogo from '../../public/neuro-set-logo-bg.png';

export const ETNAProducts: FC = () => {
  return (
    <div className="container flex flex-col gap-2.5 py-8">
      <div className="flex aspect-square w-full flex-col items-start justify-end bg-[url(/movemate-bg.png)] bg-size-[1500px_auto] bg-position-[53%_40%] bg-no-repeat px-6 py-5.5">
        <p className="text-lighter text-[22px] leading-6 tracking-tight whitespace-pre">
          {'Онлайн-сервис\nдля бронирования'}
        </p>
      </div>

      <div className="relative flex aspect-square w-full flex-col items-start justify-end bg-black bg-[url(/secure-bg.png)] bg-size-[700px_auto] bg-top bg-no-repeat px-6 py-5.5">
        <SecureLogo className="absolute top-1/2 left-1/2 -translate-1/2" />
        <p className="text-lighter text-[22px] leading-6 tracking-tight whitespace-pre">
          {'Персональный VPS\nбез лишних шагов'}
        </p>
      </div>

      <div className="relative flex aspect-square w-full flex-col items-start justify-end bg-[radial-gradient(77.09%_179.29%_at_-19.41%_94.55%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)] px-6 py-5.5">
        <Image
          src={neuroLogo}
          alt=""
          className="absolute top-1/2 left-[calc(50%+7px)] h-[189px] w-[126px] -translate-y-1/2"
        />

        <div className="font-pt-root absolute top-1/2 left-1/2 flex -translate-1/2 gap-4.5 text-[40px] leading-none tracking-tight">
          <span className="bg-[linear-gradient(337.78deg,rgba(89,96,112,0)_38.41%,rgba(89,96,112,0.8)_106.93%),linear-gradient(0deg,#E6E6E6,#E6E6E6)] bg-clip-text text-transparent">
            Нейро
          </span>
          <span className="text-lighter relative">Set</span>
        </div>

        <p className="text-lighter text-[22px] leading-6 tracking-tight whitespace-pre">
          {'Единая платформа\nдля работы с ИИ'}
        </p>
      </div>
    </div>
  );
};
