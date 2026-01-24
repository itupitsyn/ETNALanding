'use client';

import { FC, Fragment } from 'react';
import { useInView } from 'react-intersection-observer';

import { useIsMobile } from '@/lib/hooks/useIsMoblile';
import { cn } from '@/lib/utils/cn';

import { FeatureCommon } from './components/FeatureCommon';

interface FeaturesCommonProps {
  features: {
    id: number;
    header: string;
    text: string;
    textClassName?: string;
  }[];
}

export const FeaturesCommon: FC<FeaturesCommonProps> = ({ features }) => {
  const isMobile = useIsMobile();

  return (
    <div className="container cursor-default overflow-auto px-5 py-8">
      <div className="xs:gap-3 xs:flex-row flex flex-col justify-between gap-2.5 lg:gap-5">
        {features.map((item, idx, list) => (
          <Fragment key={item.id}>
            {idx > 0 && <hr className="bg-border xs:hidden h-px" />}

            <FeatureCommon
              delayMultiplier={!isMobile ? idx : 0}
              header={item.header}
              text={item.text}
              textClassName={item.textClassName}
            />

            {idx < list.length - 1 && <div className="bg-border xs:block hidden w-px flex-none" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
