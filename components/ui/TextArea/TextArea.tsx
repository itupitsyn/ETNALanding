import { CSSProperties, DetailedHTMLProps, forwardRef, ForwardRefRenderFunction, TextareaHTMLAttributes } from 'react';

import { cn } from '@/lib/utils/cn';

interface TextareaComponentProps extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> {
  isInvalid?: boolean;
  errorText?: string;
}

const Component: ForwardRefRenderFunction<HTMLTextAreaElement, TextareaComponentProps> = (
  { className, placeholder, isInvalid, errorText, ...props },
  ref,
) => {
  return (
    <div
      style={{ '--placeholder-text': placeholder ? `"${placeholder}"` : undefined } as CSSProperties}
      className={
        'after:text-input-border relative after:pointer-events-none after:absolute after:bottom-5.25 after:left-1 after:leading-[110%] after:content-(--placeholder-text) has-focus:after:hidden has-[:not(:placeholder-shown)]:after:hidden after:lg:text-xl'
      }
    >
      <textarea
        ref={ref}
        className={cn(
          'text-input-border w-full border-b border-solid px-1 py-3.5 leading-[110%] font-light tracking-tight transition-colors outline-none lg:text-xl',
          'not-placeholder-shown:text-white focus:text-white',
          isInvalid ? 'border-error' : 'border-input-border not-placeholder-shown:border-white focus:border-white',

          className,
        )}
        placeholder=" "
        {...props}
      />

      {errorText && (
        <div className="text-error absolute top-full left-0 text-xs leading-[120%] font-light">{errorText}</div>
      )}
    </div>
  );
};

export const TextArea = forwardRef(Component);
