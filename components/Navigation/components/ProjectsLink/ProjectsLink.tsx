'use client';

import Link from 'next/link';
import { FC } from 'react';

import { ID_PROJECTS } from '@/lib/constants/navigation';
import { safeScroll } from '@/lib/utils/scroll';

export const ProjectsLink: FC = () => {
  return (
    <Link
      href={`/#${ID_PROJECTS}`}
      onClick={(e) => {
        safeScroll(ID_PROJECTS, e);
      }}
      className="transition-colors hover:text-white"
    >
      Проекты
    </Link>
  );
};
