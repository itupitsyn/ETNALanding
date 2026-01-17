import { FC } from 'react';

import ArrowIcon from '../../assets/icons/arrow.svg';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

export const ETNAForm: FC = () => {
  return (
    <div className="xs:items-start container flex flex-col pb-30 lg:flex-row lg:justify-between lg:gap-x-19">
      <div className="xs:max-w-158 lg:max-w-145.5">
        <h2 className="xs:text-[40px] text-[32px] leading-[110%] tracking-tight lg:text-[46px]">
          Мы открыты для смелых идей и коллабораций.
        </h2>

        <p className="xs:text-[26px] xs:font-light text-[18px] leading-[110%] tracking-tight lg:text-[32px] lg:tracking-tighter">
          <br />
          Если вы ищете сильную продуктовую команду для реализации вашего проекта или хотите присоединиться к нашей —
          давайте обсудим возможности.
        </p>
      </div>

      <form
        className="xs:grid xs:grid-cols-2 xs:gap-5.5 xs:items-end xs: xs:mt-10.5 xs:max-w-158 mt-15 flex flex-col lg:max-w-none lg:grow"
        id="contact-us"
      >
        <Input placeholder="Телефон" />
        <Input placeholder="Почта" className="mt-5.5" />
        <Input placeholder="Имя" className="mt-5.5" />
        <Input placeholder="Тема" className="mt-5.5" />

        <TextArea placeholder="Сообщение" className="mt-5.5 resize-none" rows={5} />

        <Button className="xs:justify-self-start xs:px-6.5 xs:py-4 xs:text-sm mt-8 flex items-center justify-center gap-4 py-3.75 leading-[110%] lg:px-21 lg:py-6.5 lg:text-2xl">
          Отправить <ArrowIcon />
        </Button>
      </form>
    </div>
  );
};
