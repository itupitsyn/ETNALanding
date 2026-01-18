import { FC } from 'react';

import { ID_CONTACT_US } from '@/constants/navigation';
import { cn } from '@/utils/cn';

import ETNALogo from '../../assets/icons/etna-logo.svg';
import { LinkButton } from '../ui/LinkButton';

export const ETNAHeader: FC = () => {
  return (
    <div
      className={cn(
        'relative container h-svh w-full bg-[linear-gradient(0deg,rgba(8,19,30,0)_78.02%,rgba(8,19,30,0.72)_90.97%)] bg-position-[0px_-10px] bg-no-repeat',
        "xs:before:bg-position-[50%_70%] before:bg-size[2000px_auto] before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rotate-180 before:bg-[url(/images/etna-logo-bg-optimized.png)] before:bg-bottom before:bg-no-repeat before:content-[''] lg:before:bg-position-[30%_80%]",
        'xs:before:max-h-117.75 before:max-h-231.25 lg:before:max-h-202.5',
        'xs:max-h-117.75 max-h-231.25 lg:max-h-202.5',
      )}
    >
      <div className="xs:pb-4.5 flex h-full flex-col justify-end pb-14 lg:pb-8">
        <div className="xs:flex-row xs:items-end xs:justify-between xs:gap-y-0 flex flex-col gap-x-4 gap-y-21">
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
    </div>
  );
};
