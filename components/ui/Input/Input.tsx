import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export const Input: FC<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
  className,
  ...props
}) => {
  return (
    <input
      className={cn(
        'border-input-border text-input-border placeholder:text-input-border border-b border-solid px-1 py-3.5 leading-[110%] font-light tracking-tight transition-colors outline-none lg:text-xl',
        'not-placeholder-shown:border-white not-placeholder-shown:text-white focus:border-white focus:text-white',
        className,
      )}
      {...props}
    />
  );
};
