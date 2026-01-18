import Image from 'next/image';
import { FC } from 'react';

import { FeaturesCommon } from '../FeaturesCommon';

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
      <FeaturesCommon features={features} />

      <div className="container">
        <Image
          src="/images/tennis.png"
          alt="tennis"
          width={2200}
          height={1238}
          className="xs:h-auto h-115.75 object-cover object-[35%]"
        />
      </div>
    </>
  );
};
