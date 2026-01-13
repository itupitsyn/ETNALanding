import { FC } from 'react';

import ETNALogo from '../../assets/ETNA-logo.svg';
import { Button } from '../ui/Button';

export const ETNAHeader: FC = () => {
  return (
    <div className="xs:pb-4.5 flex h-screen max-h-231.25 w-full flex-col justify-end pb-14 before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:max-h-231.25 before:w-full before:rotate-180 before:bg-[url(/logo-bg-optimized.png)] before:bg-top before:bg-no-repeat before:content-['']">
      <div className="xs:flex-row xs:items-end xs:justify-start xs:flex-wrap xs:gap-y-4 container flex flex-col items-start">
        <ETNALogo className="text-lighter xs:w-76.5 xs:h-22 max-w-full flex-none lg:h-28.5 lg:w-98.5" />

        <p className="text-lighter xs:mt-0 xs:ml-4.25 mt-4 text-2xl leading-none font-light tracking-tighter whitespace-pre-wrap lg:text-[28px]">
          {`Создаём цифровые
продукты, которые меняют
жизнь к лучшему`}
        </p>

        <Button className="xs:self-end xs:mt-0 xs:ml-auto xs:py-4 mt-21 self-stretch px-10.25 py-3.75 lg:px-12 lg:py-6">
          Связаться
        </Button>
      </div>
    </div>
  );
};
