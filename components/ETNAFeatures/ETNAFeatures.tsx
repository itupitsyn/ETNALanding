import { FC, Fragment } from 'react';

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
  },
  {
    id: 3,
    header: 'Единая\nэкосистема',
    text: 'Мы создаём решения, которые объединяют устройства, сервисы и цифровые продукты в единую экосистему. Она устраняет барьеры между платформами, упрощает взаимодействие с технологиями и помогает бизнесу выстраивать гибкие, масштабируемые цифровые процессы.',
  },
];

export const ETNAFeatures: FC = () => {
  return (
    <div className="container overflow-auto px-5 py-8">
      <div className="flex gap-1.5">
        {features.map((item, idx, list) => (
          <Fragment key={item.id}>
            <div className="flex h-85 w-90 flex-none flex-col justify-between px-4 py-5.5">
              <h2 className="text-[32px] leading-8.75 whitespace-pre">{item.header}</h2>
              <p className="leading-4.75 font-light tracking-tighter">{item.text}</p>
            </div>

            {idx < list.length - 1 && <div className="bg-border w-px flex-none" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
