'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FC, useCallback, useState } from 'react';
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useMediaQuery } from 'usehooks-ts';
import { z } from 'zod';

import { sendRequest } from '@/app/request-action';
import { ID_CONTACT_US } from '@/lib/constants/navigation';
import { inputSchema } from '@/lib/constants/rquestForm';

import ArrowIcon from '../../lib/assets/icons/arrow.svg';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Input } from '../ui/Input';
import { MaskedInput } from '../ui/MaskedInput';
import { TextArea } from '../ui/TextArea';
import {
  AgreementCheckbox,
  EmailInput,
  MessageInput,
  NameInput,
  PhoneInput,
  SubmitButton,
  ThemeInput,
} from './FormControls';

export type RequestFormData = z.infer<typeof inputSchema>;

export const ETNAForm: FC = () => {
  const [unexpectedError, setUnexpectedError] = useState('');

  const methods = useForm<RequestFormData>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      email: '',
      message: '',
      name: '',
      phoneNumber: '',
      theme: '',
    },
  });

  const {
    reset,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<RequestFormData> = useCallback(
    async (formData) => {
      try {
        const res = await sendRequest(formData);
        const { validationErrors, serverError } = res;
        if (!validationErrors && !serverError) {
          reset(undefined, { keepErrors: false });
          return;
        }
        setUnexpectedError('Неизвестная ошибка');
      } catch {
        setUnexpectedError('Неизвестная ошибка');
      }
    },
    [reset],
  );

  return (
    <FormProvider {...methods}>
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
          className="xs:mt-10.5 xs:self-stretch mt-15 flex flex-col lg:mt-0 lg:max-w-none lg:grow"
          id={ID_CONTACT_US}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="xs:hidden flex flex-col gap-8">
            <div className="xs:hidden flex flex-col gap-5.5">
              <PhoneInput />
              <EmailInput />
              <NameInput />
              <ThemeInput />
              <MessageInput />
            </div>

            <div className="xs:hidden flex flex-col gap-2.5">
              <SubmitButton />
              <AgreementCheckbox />
            </div>
          </div>

          <div className="xs:grid hidden max-w-158 grid-cols-2 items-end gap-5.5 lg:hidden">
            <NameInput />
            <PhoneInput />
            <EmailInput />
            <ThemeInput />
            <MessageInput />
            <SubmitButton className="justify-self-start" />
          </div>

          <div className="xs:block hidden lg:hidden">
            <AgreementCheckbox />
          </div>

          <div className="hidden grid-cols-2 items-end gap-5.5 lg:grid">
            <NameInput />
            <ThemeInput />
            <div className="flex flex-col gap-5.5 self-start">
              <PhoneInput />
              <EmailInput />
            </div>
            <MessageInput className="max-h-31.25" />
            <AgreementCheckbox className="self-start" />
            <SubmitButton className="justify-self-stretch" />
          </div>
        </form>
      </div>
    </FormProvider>
  );
};
