'use client';

import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { ID_ABOUT, ID_PROJECTS, navigationLinks } from '@/lib/constants/navigation';
import { cn } from '@/lib/utils/cn';
import { safeScroll } from '@/lib/utils/scroll';

import IconCross from '../../../../lib/assets/icons/cross.svg';

interface BurgerMenuProps {
  className?: string;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  let maxWidth = '';
  if (typeof window !== 'undefined') {
    maxWidth = window.getComputedStyle(document.body).getPropertyValue('--breakpoint-xs');
  }

  const isMobile = !useMediaQuery(`(min-width: ${maxWidth})`);
  const [prevIsMobile, setPrevIsMobile] = useState(isMobile);

  if (prevIsMobile !== isMobile) {
    setIsOpen(false);
    setPrevIsMobile(isMobile);
  }

  const ref = useRef<HTMLDivElement>(null);

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    if (typeof window == 'undefined' || !ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const top = rect.top + window.scrollY;

    setIsTop(document.body.offsetHeight - top > 200);
  }, [isMobile]);

  return (
    <div className={cn('relative', className)} ref={ref}>
      <button
        className={'group flex flex-col gap-2 hover:cursor-pointer'}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {[1, 2, 3].map((item) => (
          <span key={item} className="bg-lighter h-px w-7.5 transition-colors group-hover:bg-white" />
        ))}
      </button>

      {isOpen && (
        <div
          className={cn(
            'bg-background animate-appear absolute -right-4 w-screen max-w-88',
            isTop ? '-top-6' : '-bottom-4',
          )}
        >
          <div className="relative flex flex-col gap-10.5 px-7 py-10">
            <button
              className={cn('absolute right-6 cursor-pointer', isTop ? 'top-6' : 'bottom-6')}
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              <IconCross />
            </button>

            <ul className="xs:hidden flex flex-col gap-4.5 text-xl leading-[110%] tracking-tight whitespace-nowrap">
              <li>
                <Link
                  href={`/#${ID_ABOUT}`}
                  onClick={(e) => {
                    setIsOpen(false);
                    safeScroll(ID_ABOUT, e);
                  }}
                  className="text-menu-text transition-colors hover:text-white"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href={`/#${ID_PROJECTS}`}
                  onClick={(e) => {
                    setIsOpen(false);
                    safeScroll(ID_PROJECTS, e);
                  }}
                  className="text-menu-text transition-colors hover:text-white"
                >
                  Проекты
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col items-start gap-3">
              {navigationLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-menu-text cursor-pointer text-left text-[18px] leading-[120%] tracking-tight transition-colors hover:text-white"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="mailto:corp@etna.software"
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-menu-text text-xl leading-[120%] transition-colors hover:text-white"
            >
              corp@etna.software
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
