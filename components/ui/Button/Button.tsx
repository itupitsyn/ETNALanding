import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import { cn } from '@/lib/utils/cn';

export const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        'bg-button-background hover:bg-button-background-hover text-lighter leading-none font-light tracking-tight transition-colors hover:cursor-pointer lg:text-2xl',
        className,
      )}
    />
  );
};
