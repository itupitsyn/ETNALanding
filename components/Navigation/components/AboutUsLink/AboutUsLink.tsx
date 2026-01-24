'use client';

import Link from 'next/link';
import { FC } from 'react';

import { ID_ABOUT } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';
import { safeScroll } from '@/lib/utils/scroll';

interface AboutUsLinkProps {
  className?: string;
}

export const AboutUsLink: FC<AboutUsLinkProps> = ({ className }) => {
  return (
    <Link
      href={`/#${ID_ABOUT}`}
      onClick={(e) => {
        safeScroll(ID_ABOUT, e);
      }}
      className={cn('transition-colors hover:text-white', className)}
    >
      О нас
    </Link>
  );
};
