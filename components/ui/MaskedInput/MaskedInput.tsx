import { Ref } from 'react';
import { IMaskMixin } from 'react-imask';

import { Input } from '../Input';

export const MaskedInput = IMaskMixin(({ inputRef, ...props }) => {
  return <Input {...props} ref={inputRef as Ref<HTMLInputElement>} />;
});
