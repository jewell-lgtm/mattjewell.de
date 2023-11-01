export const mapNonNull = <TIn, TOut>(
  arr: TIn[],
  fn: (it: TIn) => TOut | null
) =>
  arr.map(it => fn(it)).filter(it => it != null) as (TOut extends
    | null
    | undefined
    ? never
    : TOut)[];
