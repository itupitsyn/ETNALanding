'use client';

import Link from 'next/link';
import { FC } from 'react';

import { ID_PROJECTS } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';
import { safeScroll } from '@/lib/utils/scroll';

interface ProjectsLinkProps {
  className?: string;
}

export const ProjectsLink: FC<ProjectsLinkProps> = ({ className }) => {
  return (
    <Link
      href={`/#${ID_PROJECTS}`}
      onClick={(e) => {
        safeScroll(ID_PROJECTS, e);
      }}
      className={cn('transition-colors hover:text-white', className)}
    >
      Проекты
    </Link>
  );
};
