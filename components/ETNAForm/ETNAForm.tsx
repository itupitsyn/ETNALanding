import { FC } from 'react';

import ArrowIcon from '../../assets/icons/arrow.svg';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

export const ETNAForm: FC = () => {
  return (
    <div className="xs:items-start container flex flex-col pb-30 lg:flex-row lg:justify-between lg:gap-x-19">
      <div className="xs:max-w-158 lg:max-w-145.5">
        <h2 className="xs:text-[40px] xs:leading-11 text-[32px] leading-8.75 tracking-tight lg:text-[46px] lg:leading-12.75">
          Мы открыты для смелых идей и коллабораций.
        </h2>

        <p className="xs:text-[26px] xs:leading-7.25 xs:font-light text-[18px] leading-5 tracking-tight lg:text-[32px] lg:leading-8.75 lg:tracking-tighter">
          <br />
          Если вы ищете сильную продуктовую команду для реализации вашего проекта или хотите присоединиться к нашей —
          давайте обсудим возможности.
        </p>
      </div>

      <form className="xs:grid xs:grid-cols-2 xs:gap-5.5 xs:items-end xs: xs:mt-10.5 xs:max-w-158 mt-15 flex flex-col lg:max-w-none lg:grow">
        <Input placeholder="Телефон" />
        <Input placeholder="Почта" className="mt-5.5" />
        <Input placeholder="Имя" className="mt-5.5" />
        <Input placeholder="Тема" className="mt-5.5" />

        <TextArea placeholder="Сообщение" className="mt-5.5 resize-none" rows={5} />

        <Button className="xs:justify-self-start xs:px-6.5 xs:leading-7 xs:py-4 xs:text-sm mt-8 flex items-center justify-center gap-4 py-3.75 lg:px-21 lg:py-6.5 lg:text-2xl lg:leading-6.5">
          Отправить <ArrowIcon />
        </Button>
      </form>
    </div>
  );
};
