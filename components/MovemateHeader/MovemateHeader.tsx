'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { cn } from '@/lib/utils/cn';

import MovemateLogo from '../../lib/assets/icons/movemate-logo.svg';

export const MovemateHeader: FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <header
      ref={ref}
      role="banner"
      className={cn(
        'xs:xs:py-6 xs:max-h-330',
        'relative container flex h-svh max-h-380 cursor-default flex-col items-start justify-end overflow-hidden py-7.5',
        'lg:max-h-350 lg:pt-9 lg:pb-8.25',
      )}
    >
      <Image
        src="/images/movemate-bg.webp"
        alt="rocket"
        width={4096}
        height={2286}
        quality={100}
        className={cn(
          'absolute top-1/2 left-1/2 w-737.5 max-w-none translate-x-[-52%] translate-y-[-39.5%]',
          'xs:w-422.5 xs:translate-x-[-52.75%] xs:translate-y-[-42.5%]',
          'xs:w-726.25 xs:translate-x-[-53%] xs:translate-y-[-42.5%]',
          isInView ? 'animate-appear-up' : 'opacity-0',
        )}
      />

      <MovemateLogo
        className={cn(
          'xs:w-86.5 xs:top-1/2 absolute top-[47.25%] left-1/2 h-auto w-81 -translate-1/2 lg:w-139',
          isInView ? 'animate-appear-right' : 'opacity-0',
        )}
      />

      <p
        className={cn(
          'text-lighter text-2xl leading-[110%] font-light tracking-tighter whitespace-pre lg:text-[28px]',
          isInView ? 'animate-appear-up [animation-delay:300ms]' : 'opacity-0',
        )}
      >
        {'Онлайн-сервис\nдля бронирования'}
      </p>
    </header>
  );
};
