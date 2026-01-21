'use client';

import { FC, Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils/cn';

const features = [
  {
    id: 1,
    header: 'Интуитивный\nдизайн-код',
    text: 'Продуманные интерфейсы, которые захватывают пользователя с первых секунд, логичные сценарии и безупречный UX.',
  },
  {
    id: 2,
    header: 'Интересные\nрешения',
    text: 'Мы избегаем шаблонов. Креативный подход к задачам позволяет нам находить неочевидные ходы — будь то нестандартная механика для вовлечения аудитории или оптимизация сложного бизнес-процесса.',
    className: '[animation-delay:300ms]',
  },
  {
    id: 3,
    header: 'Единая\nэкосистема',
    text: 'Мы создаём решения, которые объединяют устройства, сервисы и цифровые продукты в единую экосистему. Она устраняет барьеры между платформами, упрощает взаимодействие с технологиями и помогает бизнесу выстраивать гибкие, масштабируемые цифровые процессы.',
    className: '[animation-delay:600ms]',
  },
];

export const ETNAFeatures: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div ref={ref} className="container cursor-default overflow-auto px-5 py-8">
      <div className="xs:gap-3 flex justify-between gap-1.5 lg:gap-5">
        {features.map((item, idx, list) => (
          <Fragment key={item.id}>
            <div
              className={cn(
                'xs:border-t xs:border-b xs:gap-11 xs:border-solid xs:border-border xs:w-62 xs:min-h-61.5 xs:px-3 xs:py-4 flex min-h-85 w-90 flex-none grow flex-col gap-22.5 px-4 py-5.5 lg:min-h-110 lg:w-111.75 lg:gap-27.5 lg:px-5.5 lg:py-7',
                isInView ? 'animate-appear' : 'opacity-0',
                item.className,
              )}
            >
              <h2 className="xs:text-[26px] text-[32px] leading-[110%] tracking-tight whitespace-pre lg:text-5xl">
                {item.header}
              </h2>
              <p className="xs:text-xs leading-[120%] font-light tracking-tighter lg:text-xl">{item.text}</p>
            </div>

            {idx < list.length - 1 && <div className="bg-border w-px flex-none" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
