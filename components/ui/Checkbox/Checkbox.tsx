import {
  DetailedHTMLProps,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';

import { cn } from '@/lib/utils/cn';

import CbOff from '../../../lib/assets/icons/cb-off.svg';
import CbOn from '../../../lib/assets/icons/cb-on.svg';

interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
  isInvalid?: boolean;
  errorText?: string;
}

const Component: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, isInvalid, errorText, children, ...props },
  ref,
) => {
  const [isChecked, setIsChecked] = useState<boolean>();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsChecked(props.checked);
  }, [props.checked]);

  return (
    <div className={cn('relative inline-flex flex-col', className)}>
      <label className="flex items-start gap-3 leading-[110%] font-light tracking-tight">
        <input
          ref={ref}
          type="checkbox"
          className="hidden"
          {...props}
          onChange={(e) => {
            setIsChecked(e.target.checked);
            props.onChange?.(e);
          }}
        />
        {isChecked ? (
          <CbOn className={cn('size-4 flex-none lg:size-5', isInvalid && 'text-error')} />
        ) : (
          <CbOff className={cn('size-4 flex-none lg:size-5', isInvalid && 'text-error')} />
        )}
        {children}
      </label>

      {errorText && (
        <div className="text-error absolute top-[110%] left-0 text-xs leading-[120%] font-light">{errorText}</div>
      )}
    </div>
  );
};

export const Checkbox = forwardRef(Component);
