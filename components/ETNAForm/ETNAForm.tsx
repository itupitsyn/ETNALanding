import { FC } from 'react';

import ArrowIcon from '../../assets/icons/arrow.svg';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const ETNAForm: FC = () => {
  return (
    <div className="container pb-30">
      <h2 className="text-[32px] leading-8.75 tracking-tight">Мы открыты для смелых идей и коллабораций.</h2>
      <p className="mt-4.5 text-[18px] leading-5 tracking-tight">
        Если вы ищете сильную продуктовую команду для реализации вашего проекта или хотите присоединиться к нашей —
        давайте обсудим возможности.
      </p>

      <form className="mt-15 flex flex-col">
        <Input placeholder="Телефон" />
        <Input placeholder="Почта" className="mt-5.5" />
        <Input placeholder="Имя" className="mt-5.5" />
        <Input placeholder="Тема" className="mt-5.5" />

        <Button className="mt-8 flex items-center justify-center gap-4 py-3.75">
          Отправить <ArrowIcon />
        </Button>
      </form>
    </div>
  );
};
