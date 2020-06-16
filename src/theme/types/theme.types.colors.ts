type Invalid<T> = Error & { __errorMessage: T };

type AsUniqueArray<A extends ReadonlyArray<any>, B extends ReadonlyArray<any>> = {
  [I in keyof A]: unknown extends {
    [J in keyof B]: J extends I ? never : B[J] extends A[I] ? unknown : never;
  }[number]
    ? Invalid<[A[I], 'is repeated']>
    : A[I];
};

type Narrowable = string | number | boolean | object | null | undefined | symbol;

export const asUniqueArray = <N extends Narrowable, A extends [] | (ReadonlyArray<N> & AsUniqueArray<A, A>)>(a: A) => a;
