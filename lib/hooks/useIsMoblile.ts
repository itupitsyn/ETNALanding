import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export const useIsMobile = () => {
  const [maxWidth, setMaxWidth] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const val = window.getComputedStyle(document.body).getPropertyValue('--breakpoint-xs');
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMaxWidth(val);
    }
  }, []);

  const isMobile = !useMediaQuery(`(min-width: ${maxWidth})`);

  return isMobile;
};
