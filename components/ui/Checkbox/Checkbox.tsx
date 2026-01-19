import { DetailedHTMLProps, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils/cn';

interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  isInvalid?: boolean;
  errorText?: string;
}

const Component: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, isInvalid, errorText, children, ...props },
  ref,
) => {
  return (
    <div className={cn('relative inline-flex flex-col', className)}>
      <label className="flex items-start gap-3 leading-[110%] font-light tracking-tight">
        <input ref={ref} type="checkbox" className="mt-0.5" {...props} />
        {children}
      </label>

      {errorText && (
        <div className="text-error absolute top-[110%] left-0 text-xs leading-[120%] font-light">{errorText}</div>
      )}
    </div>
  );
};

export const Checkbox = forwardRef(Component);
