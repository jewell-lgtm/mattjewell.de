export const assertNonNull = <T>(
  input: T,
  errorFactory: () => string | Error = () => "Invariant"
) => {
  if (input == null) {
    throw errorFactory();
  }
  return input as NonNullable<T>;
};
