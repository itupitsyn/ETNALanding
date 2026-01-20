export const formatPhone = (value: string): string => {
  const digits = value.replace(/[^\d]/g, '');

  const limitedDigits = digits.slice(0, 11);

  if (limitedDigits.length === 0) return '';

  let phoneDigits = limitedDigits;
  if (phoneDigits[0] === '8') {
    phoneDigits = '7' + phoneDigits.slice(1);
  } else if (phoneDigits[0] !== '7') {
    phoneDigits = '7' + phoneDigits;
  }

  phoneDigits = phoneDigits.slice(0, 11);

  if (phoneDigits.length === 0) return '';
  if (phoneDigits.length === 1) return '+7';
  if (phoneDigits.length <= 4) return `+7 (${phoneDigits.slice(1)}`;
  if (phoneDigits.length <= 7) return `+7 (${phoneDigits.slice(1, 4)}) ${phoneDigits.slice(4)}`;
  if (phoneDigits.length <= 9)
    return `+7 (${phoneDigits.slice(1, 4)}) ${phoneDigits.slice(4, 7)}-${phoneDigits.slice(7)}`;
  return `+7 (${phoneDigits.slice(1, 4)}) ${phoneDigits.slice(4, 7)}-${phoneDigits.slice(7, 9)}-${phoneDigits.slice(9, 11)}`;
};
