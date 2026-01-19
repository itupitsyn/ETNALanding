import { FC } from 'react';

import MovemateLogo from '../../lib/assets/icons/movemate-logo.svg';

export const MovemateHeader: FC = () => {
  return (
    <div className="xs:max-h-117.5 xs:bg-size-[1700px_auto] xs:bg-position-[55%_35%] xs:py-6 relative container flex h-svh max-h-231.25 flex-col items-start justify-end bg-[url(/images/movemate-bg.png)] bg-size-[2500px_auto] bg-position-[54%_10%] py-8 lg:max-h-202.5 lg:bg-size-[2700px_auto] lg:bg-position-[60%_32%] lg:py-9">
      <MovemateLogo className="xs:w-85 absolute top-1/2 left-1/2 h-auto w-79.25 -translate-1/2 lg:w-137.5" />

      <p className="text-lighter text-2xl leading-[110%] font-light tracking-tight whitespace-pre lg:text-[28px]">
        {'Онлайн-сервис\nдля бронирования'}
      </p>
    </div>
  );
};
