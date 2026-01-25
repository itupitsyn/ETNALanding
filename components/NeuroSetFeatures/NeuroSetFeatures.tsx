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
    text: 'Сервис для работы с Large Language Models. НЕЙРО Set — это ваш шлюз к возможностям искусственного интеллекта для бизнеса и творчества. Создавайте, анализируйте и генерируйте контент с помощью передовых нейросетей. ',
  },
  {
    id: 2,
    header: 'Особенности',
    text: 'Доступ к множеству LLM через единый сервис, инструменты для анализа и визуализации результатов, удобное корпоративное использование.',
    textClassName: 'lg:max-w-[452px]',
  },
];

export const NeuroSetFeatures: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <main role="main">
      <FeaturesCommon features={features} />

      <div
        ref={ref}
        className="xs:h-117.5 xs:mb-6 lg_mb-8 relative container mb-8 h-115.75 overflow-hidden bg-[radial-gradient(88.38%_225.86%_at_96.12%_25.03%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)] lg:h-187.5"
      >
        <Image
          src="/images/computer.webp"
          alt="tennis"
          width={1585}
          height={1158}
          className={cn(
            'xs:w-170 xs:top-[13.5%] xs:left-[54.5%] xs:scale-y-110',
            'absolute top-[18%] left-[56%] w-130 max-w-none -translate-x-1/2 object-cover',
            'lg:top-[8%] lg:left-[52.5%] lg:w-304 lg:scale-y-100',
            isInView ? 'animate-appear-up' : 'opacity-0',
          )}
        />
      </div>
    </main>
  );
};
