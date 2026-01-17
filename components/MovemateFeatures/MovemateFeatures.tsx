import Image from 'next/image';
import { FC, Fragment } from 'react';

import { cn } from '@/utils/cn';

const features = [
  {
    id: 1,
    header: 'Описание',
    text: 'Онлайн-сервис для бронирования теннисных кортов и площадок для падел-тенниса. Удобное расписание, мгновенное подтверждение брони и система рейтингов — играйте в свое удовольствие.',
    textClassName: 'lg:max-w-[579px]',
  },
  {
    id: 2,
    header: 'Особенности',
    text: 'Ключевые фичи: Онлайн-бронирование и оплата, рейтинг пользователей и тренеров, система уведомлений, планирование игр с друзьями.',
    textClassName: 'lg:max-w-[438px]',
  },
];

export const MovemateFeatures: FC = () => {
  return (
    <>
      <div className="container overflow-auto px-5 py-8">
        <div className="xs:gap-3 xs:flex-row flex flex-col justify-between gap-2.5 lg:gap-5">
          {features.map((item, idx, list) => (
            <Fragment key={item.id}>
              <hr className="bg-border xs:hidden h-px" />
              <div
                className={cn(
                  'xs:border-t xs:border-b xs:border-solid xs:border-border xs:w-62 xs:min-h-52.25 xs:px-3 xs:py-4 xs:gap-20',
                  'flex min-h-73.5 flex-none grow flex-col gap-30 px-4 py-5.5',
                  'lg:min-h-83.75 lg:gap-27.5 lg:px-5.5 lg:py-7',
                )}
              >
                <h2 className="xs:text-[26px] text-[32px] leading-[110%] tracking-tight whitespace-pre lg:text-5xl">
                  {item.header}
                </h2>

                <p
                  className={cn(
                    'xs:text-sm leading-[120%] font-light tracking-tighter lg:text-2xl',
                    item.textClassName,
                  )}
                >
                  {item.text}
                </p>
              </div>

              {idx < list.length - 1 && <div className="bg-border xs:block hidden w-px flex-none" />}
            </Fragment>
          ))}
        </div>
      </div>

      <div className="container">
        <Image
          src="/tennis.png"
          alt="tennis"
          width={2200}
          height={1238}
          className="xs:h-auto h-115.75 object-cover object-[35%]"
        />
      </div>
    </>
  );
};
