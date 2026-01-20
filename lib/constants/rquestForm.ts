import validator from 'validator';
import { z } from 'zod';

// This schema is used to validate input from client.
export const inputSchema = z.object({
  phoneNumber: z
    .string({ error: 'Обязательное поле' })
    .trim()
    .min(1, { error: 'Обязательное поле' })
    .refine(validator.isMobilePhone, { error: 'Некорректный формат' }),
  email: z
    .email({ pattern: z.regexes.unicodeEmail, error: 'Некорректный формат' })
    .trim()
    .min(1, { error: 'Обязательное поле' })
    .max(128, { error: 'Максимальная длина 128' }),
  name: z
    .string({ error: 'Обязательное поле' })
    .trim()
    .min(1, { error: 'Обязательное поле' })
    .max(128, { error: 'Максимальная длина 128' }),
  theme: z
    .string({ error: 'Обязательное поле' })
    .trim()
    .min(1, { error: 'Обязательное поле' })
    .max(256, { error: 'Максимальная длина 256' }),
  message: z
    .string({ error: 'Обязательное поле' })
    .trim()
    .min(1, { error: 'Обязательное поле' })
    .max(1024, { error: 'Максимальная длина 1024' }),
  agreement: z.literal(true, { error: 'Необходимо дать согласие' }),
});
