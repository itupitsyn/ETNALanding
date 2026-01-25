'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils/cn';

import { FeaturesCommon } from '../FeaturesCommon';

const features = [
  {
    id: 1,
    header: 'Описание',
    text: 'Онлайн-сервис для бронирования теннисных кортов и площадок для падел-тенниса. Удобное расписание, мгновенное подтверждение брони и система рейтингов — играйте в свое удовольствие.',
    textClassName: 'lg:max-w-[579px]',
  },
  {
    id: 2,
    header: 'Особенности',
    text: 'Ключевые фичи: Онлайн-бронирование и оплата, рейтинг пользователей и тренеров, система уведомлений, планирование игр с друзьями.',
    textClassName: 'lg:max-w-[438px]',
  },
];

export const MovemateFeatures: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <main role="main">
      <FeaturesCommon features={features} />

      <div ref={ref} className={cn('container', isInView ? 'animate-appear-up' : 'opacity-0')}>
        <Image
          src="/images/tennis.webp"
          alt="tennis"
          width={2200}
          height={1238}
          className="xs:h-117.5 xs:object-top h-115.75 object-cover object-[35%] lg:h-187.5"
        />
      </div>
    </main>
  );
};
