'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useCallback, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { sendRequest } from '@/app/request-action';
import { ID_CONTACT_US } from '@/lib/constants/navigation';
import { inputSchema } from '@/lib/constants/rquestForm';

import { Modal } from '../ui/Modal';
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
  const [isSuccess, setIsSuccess] = useState(false);
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
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(undefined, {
        keepErrors: false,
        keepDefaultValues: true,
        keepDirty: false,
        keepDirtyValues: false,
        keepIsSubmitted: false,
        keepIsValid: false,
        keepSubmitCount: false,
        keepTouched: false,
        keepIsSubmitSuccessful: false,
        keepIsValidating: false,
        keepValues: false,
        keepFieldsRef: false,
      });
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<RequestFormData> = useCallback(async (formData) => {
    try {
      const res = await sendRequest(formData);
      const { validationErrors, serverError } = res;
      if (!validationErrors && !serverError) {
        setIsSuccess(true);
        return;
      }
      setUnexpectedError('Неизвестная ошибка');
    } catch {
      setUnexpectedError('Неизвестная ошибка');
    }
  }, []);

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
          className="xs:mt-10.5 xs:self-stretch mt-15 flex flex-col lg:mt-0 lg:max-w-none lg:min-w-137.5 lg:grow"
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

          <div className="xs:grid hidden grid-cols-[minmax(0,305px)_minmax(0,500px)] gap-5.5 pt-3 lg:hidden">
            <div className="" />
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

      <Modal isOpen={!!unexpectedError} onClose={() => setUnexpectedError('')} className="xs:w-auto w-full">
        {unexpectedError}
      </Modal>
      <Modal
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        className="xs:w-auto flex w-full items-center justify-center lg:h-61 lg:w-128.75"
      >
        <div className="text-center leading-[110%] tracking-tight whitespace-pre lg:text-2xl">
          {'Ваше сообщение отправлено,\nнаша команда свяжется с Вами\nв скором времени.'}
        </div>
      </Modal>
    </FormProvider>
  );
};
