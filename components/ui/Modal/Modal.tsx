'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/lib/utils/cn';

import IconCross from '../../../lib/assets/icons/cross.svg';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="animate-appear fixed top-0 left-0 z-50 flex h-svh w-svw items-center justify-center backdrop-brightness-50">
      <div className={cn('bg-background relative py-10.5 pr-15.75 pl-12', className)}>
        <button
          className="absolute top-6 right-6 cursor-pointer transition-colors hover:cursor-pointer hover:text-white"
          onClick={onClose}
        >
          <IconCross />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
