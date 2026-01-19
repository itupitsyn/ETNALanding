import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import { cn } from '@/lib/utils/cn';

export const LinkButton: FC<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> = ({
  className,
  href,
  ...props
}) => {
  return (
    <Link
      href={href || ''}
      {...props}
      className={cn(
        'bg-button-background hover:bg-button-background-hover text-lighter leading-none font-light tracking-tight transition-colors hover:cursor-pointer lg:text-2xl',
        className,
      )}
    />
  );
};
