'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useCallback, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { z } from 'zod';

import { sendRequest } from '@/app/request-action';
import { ID_CONTACT_US } from '@/lib/constants/navigation';
import { inputSchema } from '@/lib/constants/rquestForm';
import { cn } from '@/lib/utils/cn';

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
  const [refH, isInViewH] = useInView({ threshold: 0.5, triggerOnce: true });
  const [refD, isInViewD] = useInView({ threshold: 0.5, triggerOnce: true });
  const [refF, isInViewF] = useInView({ threshold: 0.5, triggerOnce: true });

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
      <div className="xs:items-start 0 container flex flex-col lg:flex-row lg:justify-between lg:gap-x-19">
        <div className="xs:max-w-158 cursor-default lg:max-w-145.5">
          <h2
            ref={refH}
            className={cn(
              'xs:text-[40px] text-[32px] leading-[110%] tracking-tight lg:text-[46px]',
              isInViewH ? 'animate-appear-up' : 'opacity-0',
            )}
          >
            Мы открыты для смелых идей и коллабораций.
          </h2>

          <p
            ref={refD}
            className={cn(
              'xs:text-[26px] xs:font-light text-[18px] leading-[110%] tracking-tight lg:text-[32px] lg:tracking-tighter',
              isInViewD ? 'animate-appear-up [animation-delay:300ms]' : 'opacity-0',
            )}
          >
            <br />
            Если вы ищете сильную продуктовую команду для реализации вашего проекта или хотите присоединиться к нашей —
            давайте обсудим возможности.
          </p>
        </div>

        <form
          ref={refF}
          id={ID_CONTACT_US}
          className="xs:mt-10.5 xs:self-stretch mt-15 flex flex-col lg:mt-0 lg:max-w-none lg:min-w-137.5 lg:grow"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="xs:hidden flex flex-col gap-8">
            <div className="xs:hidden flex flex-col gap-5.5">
              <PhoneInput className={cn(isInViewF ? 'animate-appear-right' : 'opacity-0')} />
              <EmailInput className={cn(isInViewF ? 'animate-appear-right [animation-delay:200ms]' : 'opacity-0')} />
              <NameInput className={cn(isInViewF ? 'animate-appear-right [animation-delay:400ms]' : 'opacity-0')} />
              <ThemeInput className={cn(isInViewF ? 'animate-appear-right [animation-delay:600ms]' : 'opacity-0')} />
              <MessageInput
                rootClassName={cn(isInViewF ? 'animate-appear-right [animation-delay:800ms]' : 'opacity-0')}
              />
            </div>

            <div className="xs:hidden flex flex-col gap-2.5">
              <SubmitButton className="animate-appear-up [animation-delay:1000ms]" />
              <AgreementCheckbox className="animate-appear-up [animation-delay:1200ms]" />
            </div>
          </div>

          <div className="xs:grid hidden max-w-158 grid-cols-2 items-end gap-5.5 lg:hidden">
            <NameInput className={cn(isInViewF ? 'animate-appear-right [animation-delay:0ms]' : 'opacity-0')} />
            <PhoneInput className={cn(isInViewF ? 'animate-appear-left [animation-delay:0ms]' : 'opacity-0')} />
            <EmailInput className={cn(isInViewF ? 'animate-appear-right [animation-delay:200ms]' : 'opacity-0')} />
            <ThemeInput className={cn(isInViewF ? 'animate-appear-left [animation-delay:200ms]' : 'opacity-0')} />
            <MessageInput
              rootClassName={cn(isInViewF ? 'animate-appear-right [animation-delay:400ms]' : 'opacity-0')}
            />
            <SubmitButton
              className={cn(
                'justify-self-start',
                isInViewF ? 'animate-appear-left [animation-delay:400ms]' : 'opacity-0',
              )}
            />
          </div>

          <div className="xs:grid hidden grid-cols-[minmax(0,305px)_minmax(0,500px)] gap-5.5 pt-3 lg:hidden">
            <div className="" />
            <AgreementCheckbox
              className={cn(isInViewF ? 'animate-appear-left [animation-delay:600ms]' : 'opacity-0')}
            />
          </div>

          <div className="hidden grid-cols-2 items-end gap-5.5 lg:grid">
            <NameInput className={cn(isInViewF ? 'animate-appear-up [animation-delay:0ms]' : 'opacity-0')} />
            <ThemeInput className={cn(isInViewF ? 'animate-appear-left [animation-delay:0ms]' : 'opacity-0')} />
            <div className="flex flex-col gap-5.5 self-start">
              <PhoneInput className={cn(isInViewF ? 'animate-appear-up [animation-delay:200ms]' : 'opacity-0')} />
              <EmailInput className={cn(isInViewF ? 'animate-appear-up [animation-delay:400ms]' : 'opacity-0')} />
            </div>
            <MessageInput
              className="max-h-31.25"
              rootClassName={cn(isInViewF ? 'animate-appear-left [animation-delay:300ms]' : 'opacity-0')}
            />
            <AgreementCheckbox
              className={cn('self-start', isInViewF ? 'animate-appear-up [animation-delay:600ms]' : 'opacity-0')}
            />
            <SubmitButton
              className={cn(
                'justify-self-stretch',
                isInViewF ? 'animate-appear-left [animation-delay:600ms]' : 'opacity-0',
              )}
            />
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
