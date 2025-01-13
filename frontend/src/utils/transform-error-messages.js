export const transformErrorMessages = (errorMessages) => {
  const transformedErrors = {};

  for (const error of errorMessages) {
    const key = error.path[0];

    if (transformedErrors[key]) {
      transformedErrors[key].push(error.message);
    } else {
      transformedErrors[key] = [error.message];
    }
  }

  return transformedErrors;
};
