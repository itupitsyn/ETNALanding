import { FC, Fragment } from 'react';

import { ETNAFeature } from './components/ETNAFeature';

const features = [
  {
    id: 1,
    header: 'Интуитивный\nдизайн-код',
    text: 'Продуманные интерфейсы, которые захватывают пользователя с первых секунд, логичные сценарии и безупречный UX.',
    textClassName: 'lg:max-w-[357px]',
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
    text: 'Мы создаём решения, которые объединяют устройства, сервисы и цифровые продукты в единую экосистему. Она устраняет барьеры между платформами, упрощает взаимодействие с технологиями и помогает бизнесу выстраивать гибкие, масштабируемые цифровые процессы.',
    className: '[animation-delay:600ms]',
  },
];

export const ETNAFeatures: FC = () => {
  return (
    <div className="container cursor-default overflow-auto px-5 py-8">
      <div className="xs:gap-3 flex justify-between gap-1.5 lg:gap-5">
        {features.map((item, idx, list) => (
          <Fragment key={item.id}>
            <ETNAFeature {...item} delayMultiplier={idx} />

            {idx < list.length - 1 && <div className="bg-border w-px flex-none" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
