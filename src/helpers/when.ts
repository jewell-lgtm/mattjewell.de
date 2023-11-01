export const when = <T, TOut>(
  input: T,
  fn: (input: NonNullable<T>) => TOut
) => {
  if (input == null) return;
  return fn(input);
};
