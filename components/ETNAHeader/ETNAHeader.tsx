import { FC } from 'react';

import { ID_CONTACT_US } from '@/constants/navigation';
import { cn } from '@/utils/cn';

import ETNALogo from '../../assets/icons/etna-logo.svg';
import { LinkButton } from '../ui/LinkButton';

export const ETNAHeader: FC = () => {
  const maxHclassName = 'max-h-231.25 xs:max-h-[471px] lg:max-h-202.5';
  const bgClassName =
    "before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rotate-180 before:bg-[url(/etna-logo-bg-optimized.png)] before:bg-top before:bg-no-repeat before:content-[''] lg:bg-bottom";
  const bgMaxHclassName = 'before:max-h-231.25 xs:before:max-h-[471px] lg:before:max-h-202.5';

  return (
    <div
      className={cn(
        'xs:pb-4.5 flex h-svh w-full flex-col justify-end pb-14 lg:pb-8',
        bgClassName,
        maxHclassName,
        bgMaxHclassName,
      )}
    >
      <div className="xs:flex-row xs:items-end xs:justify-between xs:gap-y-0 container flex flex-col gap-x-4 gap-y-21">
        <div className="xs:flex-row xs:items-end xs:gap-y-4 xs:gap-4 flex shrink flex-col items-start gap-4.5 lg:gap-6">
          <ETNALogo className="text-lighter xs:w-76.5 xs:h-22 max-w-full lg:h-28.5 lg:w-98.5" />

          <p className="text-lighter xs:text-[clamp(0.5rem,3vw,1.75rem)] shrink text-2xl leading-[110%] font-light tracking-tighter whitespace-pre lg:text-[28px]">
            {'Создаём цифровые\nпродукты, которые меняют\nжизнь к лучшему'}
          </p>
        </div>

        <LinkButton
          className="xs:py-4 flex justify-center px-10.25 py-3.75 lg:px-12 lg:py-6"
          href={`#${ID_CONTACT_US}`}
        >
          Связаться
        </LinkButton>
      </div>
    </div>
  );
};
