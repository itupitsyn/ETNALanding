'use client';

import Link from 'next/link';
import { FC } from 'react';

import { ID_ABOUT } from '@/lib/constants/navigation';
import { safeScroll } from '@/lib/utils/scroll';

export const AboutUsLink: FC = () => {
  return (
    <Link
      href={`/#${ID_ABOUT}`}
      onClick={(e) => {
        safeScroll(ID_ABOUT, e);
      }}
      className="transition-colors hover:text-white"
    >
      О нас
    </Link>
  );
};
