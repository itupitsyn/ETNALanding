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
      <div className="xs:gap-3 flex justify-between gap-1.5 lg:gap-5">
        {features.map((item, idx, list) => (
          <Fragment key={item.id}>
            <div className="xs:border-t xs:border-b xs:border-solid xs:border-border xs:w-62 xs:h-61.5 xs:px-3 xs:py-4 flex h-85 w-90 flex-none flex-col justify-between px-4 py-5.5 lg:h-110 lg:w-111.75 lg:px-5.5 lg:py-7">
              <h2 className="xs:text-[26px] xs:leading-7.25 text-[32px] leading-8.75 tracking-tight whitespace-pre lg:text-5xl lg:leading-13.25">
                {item.header}
              </h2>
              <p className="xs:text-xs xs:leading-3.75 leading-4.75 font-light tracking-tighter lg:h-42 lg:text-xl lg:leading-6">
                {item.text}
              </p>
            </div>

            {idx < list.length - 1 && <div className="bg-border w-px flex-none" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
