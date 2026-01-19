'use server'; // don't forget to add this!

import { returnValidationErrors } from 'next-safe-action';

import { inputSchema } from '@/lib/constants/rquestForm';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/utils/safe-action';

// This schema is used to validate input from client.

export const sendRequest = actionClient
  .inputSchema(inputSchema)
  .action(async ({ parsedInput: { email, message, name, phoneNumber, theme } }) => {
    try {
      const request = await prisma.request.create({
        data: {
          email: email.trim(),
          message: message.trim(),
          name: name.trim(),
          phoneNumber: phoneNumber.trim(),
          theme: theme.trim(),
        },
      });

      return request;
    } catch (error) {
      console.error(error);
      return returnValidationErrors(inputSchema, { _errors: [error instanceof Error ? error.message : String(error)] });
    }
  });
