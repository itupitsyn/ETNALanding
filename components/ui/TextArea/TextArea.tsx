import { CSSProperties, DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export const TextArea: FC<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = ({
  className,
  placeholder,
  ...props
}) => {
  return (
    <div
      style={{ '--placeholder-text': placeholder ? `"${placeholder}"` : undefined } as CSSProperties}
      className={
        'after:text-input-border relative after:pointer-events-none after:absolute after:bottom-3.5 after:left-1 after:content-(--placeholder-text) has-focus:after:hidden has-[:not(:placeholder-shown)]:after:hidden'
      }
    >
      <textarea
        className={cn(
          'border-input-border text-input-border w-full border-b border-solid px-1 py-3.5 leading-4.5 font-light tracking-tight transition-colors outline-none',
          'not-placeholder-shown:border-white not-placeholder-shown:text-white focus:border-white focus:text-white',
          className,
        )}
        placeholder=" "
        {...props}
      />
    </div>
  );
};
