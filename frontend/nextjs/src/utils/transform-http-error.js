import { transformErrorMessages } from "./transform-error-messages";

export const transformHttpError = (err) => {
  const error = err?.response?.data?.error || {};

  const message = error?.message;
  const statusCode = error?.status;
  const errorMessages = error?.details?.errors || [];

  const httpError = {
    statusCode,
    message,
    errors: transformErrorMessages(errorMessages),
  };

  return httpError;
};
