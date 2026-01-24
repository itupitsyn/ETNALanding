'use client';

import { FC } from 'react';

import { LinkButton } from '@/components/ui/LinkButton';
import { ID_CONTACT_US } from '@/lib/constants/navigation';
import { safeScroll } from '@/lib/utils/scroll';

export const ContactUsButton: FC = () => {
  return (
    <LinkButton
      className="xs:py-4 animate-appear-left flex justify-center px-10.25 py-3.75 lg:px-12 lg:py-6"
      href={`#${ID_CONTACT_US}`}
      onClick={(e) => {
        safeScroll(ID_CONTACT_US, e);
      }}
    >
      Связаться
    </LinkButton>
  );
};
