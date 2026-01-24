import Link from 'next/link';
import { ChangeEvent, CSSProperties, FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils/cn';
import { formatPhone } from '@/lib/utils/form';

import ArrowIcon from '../../lib/assets/icons/arrow.svg';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { RequestFormData } from './ETNAForm';

interface ControlProps {
  className?: string;
  style?: CSSProperties;
}

export const PhoneInput: FC<ControlProps> = ({ className, style }) => {
  const { control } = useFormContext<RequestFormData>();

  return (
    <Controller
      control={control}
      name="phoneNumber"
      render={({ field, fieldState: { invalid, error } }) => (
        <Input
          {...field}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const formatted = formatPhone(e.target.value);
            field.onChange(formatted);
          }}
          className={className}
          style={style}
          isInvalid={invalid}
          errorText={error?.message}
          placeholder="Телефон"
        />
      )}
    />
  );
};

export const EmailInput: FC<ControlProps> = ({ className, style }) => {
  const { control } = useFormContext<RequestFormData>();

  return (
    <Controller
      control={control}
      name="email"
      render={({ field, fieldState: { invalid, error } }) => (
        <Input
          {...field}
          isInvalid={invalid}
          errorText={error?.message}
          placeholder="Почта"
          className={className}
          style={style}
        />
      )}
    />
  );
};

export const NameInput: FC<ControlProps> = ({ className, style }) => {
  const { control } = useFormContext<RequestFormData>();

  return (
    <Controller
      control={control}
      name="name"
      render={({ field, fieldState: { invalid, error } }) => (
        <Input
          {...field}
          isInvalid={invalid}
          errorText={error?.message}
          placeholder="Имя"
          className={className}
          style={style}
        />
      )}
    />
  );
};

export const ThemeInput: FC<ControlProps> = ({ className, style }) => {
  const { control } = useFormContext<RequestFormData>();

  return (
    <Controller
      control={control}
      name="theme"
      render={({ field, fieldState: { invalid, error } }) => (
        <Input
          {...field}
          isInvalid={invalid}
          errorText={error?.message}
          placeholder="Тема"
          className={className}
          style={style}
        />
      )}
    />
  );
};

export const MessageInput: FC<ControlProps & { rootClassName?: string }> = ({ className, rootClassName, style }) => {
  const { control } = useFormContext<RequestFormData>();

  return (
    <Controller
      control={control}
      name="message"
      render={({ field, fieldState: { invalid, error } }) => (
        <TextArea
          {...field}
          isInvalid={invalid}
          errorText={error?.message}
          placeholder="Сообщение"
          className={cn('resize-none', className)}
          rootClassName={rootClassName}
          style={style}
          rows={5}
        />
      )}
    />
  );
};

export const AgreementCheckbox: FC<ControlProps> = ({ className, style }) => {
  const { control } = useFormContext<RequestFormData>();

  return (
    <Controller
      control={control}
      name="agreement"
      render={({ field, fieldState: { invalid, error } }) => (
        <Checkbox
          {...field}
          value={undefined}
          checked={field.value || false}
          isInvalid={invalid}
          errorText={error?.message}
          className={className}
          style={style}
        >
          <span className="text-sm leading-[110%] tracking-tight lg:pt-0.5 lg:text-base">
            Даю{' '}
            <Link href="/consent" className="underline underline-offset-2 transition-colors hover:text-white">
              согласие
            </Link>{' '}
            на обработку персональных данных
          </span>
        </Checkbox>
      )}
    />
  );
};

export const SubmitButton: FC<ControlProps> = ({ className, style }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext<RequestFormData>();

  return (
    <Button
      aria-label="Submit request"
      className={cn(
        'xs:px-6.5 xs:py-4 xs:text-sm xs:mt-0 xs:min-h-auto mt-2.5 flex min-h-15 items-center justify-center gap-4 py-3.75 leading-[110%] lg:px-1 lg:py-6.5 lg:text-2xl',
        className,
      )}
      style={style}
      disabled={isSubmitting}
    >
      Отправить <ArrowIcon className="flex-none" />
    </Button>
  );
};
