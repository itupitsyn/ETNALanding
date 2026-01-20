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
    text: 'Сервис для работы с Large Language Models. НЕЙРО Set — это ваш шлюз к возможностям искусственного интеллекта для бизнеса и творчества. Создавайте, анализируйте и генерируйте контент с помощью передовых нейросетей. ',
  },
  {
    id: 2,
    header: 'Особенности',
    text: 'Доступ к множеству LLM через единый сервис, инструменты для анализа и визуализации результатов, удобное корпоративное использование.',
    textClassName: 'lg:max-w-[452px]',
  },
];

export const NeuroSetFeatures: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <>
      <FeaturesCommon features={features} />

      <div
        ref={ref}
        className="xs:h-117.5 group relative container h-115.75 overflow-hidden bg-[radial-gradient(88.38%_225.86%_at_96.12%_25.03%,rgba(135,168,209,0.3)_0%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#00081D,#00081D)] lg:h-187.5"
      >
        <Image
          src="/images/computer.png"
          alt="tennis"
          width={1585}
          height={1158}
          className={cn(
            'xs:w-175 xs:top-10 absolute top-20 left-[50%] w-137.5 max-w-none -translate-x-1/2 object-cover lg:top-20 lg:w-300',
            'duration-500 group-hover:scale-103',
            isInView ? 'animate-appear' : 'opacity-0',
          )}
        />
      </div>
    </>
  );
};
