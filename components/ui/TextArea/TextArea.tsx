import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export const Input: FC<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = ({
  className,
  ...props
}) => {
  return (
    <textarea
      className={cn(
        'border-input-border text-input-border border-b border-solid px-1 py-3.5 leading-4.5 font-light tracking-tight transition-colors outline-none',
        'not-placeholder-shown:border-white not-placeholder-shown:text-white focus:border-white focus:text-white',
        className,
      )}
      {...props}
    />
  );
};
