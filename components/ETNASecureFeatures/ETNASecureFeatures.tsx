import Image from 'next/image';
import { FC } from 'react';

import { FeaturesCommon } from '../FeaturesCommon';

const features = [
  {
    id: 1,
    header: 'Описание',
    text: 'Мощный VPS-клиент, который работает на всех современных платформах. Мы сделали защищённый и быстрый интернет доступным каждому. Обходите ограничения, сохраняйте анонимность и наслаждайтесь стабильным соединением где угодно.',
  },
  {
    id: 2,
    header: 'Особенности',
    text: 'Кроссплатформенность, высокая скорость, разнообразное гео.',
    textClassName: 'lg:max-w-[416px] xs:max-w-[229px] max-w-[186px]',
  },
];

export const ETNASecureFeatures: FC = () => {
  return (
    <>
      <FeaturesCommon features={features} />

      <div className="container">
        <Image
          src="/images/smartphone.png"
          alt="tennis"
          width={2860}
          height={1500}
          className="xs:h-104 h-118.25 object-cover lg:h-187.5"
        />
      </div>
    </>
  );
};
