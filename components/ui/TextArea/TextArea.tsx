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
        'after:text-input-border relative after:pointer-events-none after:absolute after:bottom-5.25 after:left-1 after:leading-[110%] after:content-(--placeholder-text) has-focus:after:hidden has-[:not(:placeholder-shown)]:after:hidden after:lg:text-xl'
      }
    >
      <textarea
        className={cn(
          'border-input-border text-input-border w-full border-b border-solid px-1 py-3.5 leading-[110%] font-light tracking-tight transition-colors outline-none lg:text-xl',
          'not-placeholder-shown:border-white not-placeholder-shown:text-white focus:border-white focus:text-white',
          className,
        )}
        placeholder=" "
        {...props}
      />
    </div>
  );
};
