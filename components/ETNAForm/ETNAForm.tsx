import { FC } from 'react';

import ArrowIcon from '../../assets/icons/arrow.svg';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

export const ETNAForm: FC = () => {
  return (
    <div className="container pb-30">
      <h2 className="xs:text-[40px] xs:leading-11 text-[32px] leading-8.75 tracking-tight lg:text-[46px] lg:leading-12.75">
        Мы открыты для смелых идей и коллабораций.
      </h2>

      <p className="xs:text-[26px] xs:leading-7.25 xs:font-light text-[18px] leading-5 tracking-tight lg:text-[32px] lg:leading-8.75">
        <br />
        Если вы ищете сильную продуктовую команду для реализации вашего проекта или хотите присоединиться к нашей —
        давайте обсудим возможности.
      </p>

      <form className="mt-15 flex flex-col">
        <Input placeholder="Телефон" />
        <Input placeholder="Почта" className="mt-5.5" />
        <Input placeholder="Имя" className="mt-5.5" />
        <Input placeholder="Тема" className="mt-5.5" />

        <TextArea placeholder="Сообщение" className="mt-5.5" rows={5} />

        <Button className="mt-8 flex items-center justify-center gap-4 py-3.75">
          Отправить <ArrowIcon />
        </Button>
      </form>
    </div>
  );
};
