'use client';

import { FC, useState } from 'react';

import { cn } from '@/utils/cn';

interface BurgerMenuProps {
  className?: string;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className={cn('flex flex-col gap-2', className)}>
      {[1, 2, 3].map((item) => (
        <span key={item} className="bg-lighter h-px w-7.5" />
      ))}
    </button>
  );
};
