/* eslint-disable max-classes-per-file, no-useless-constructor, lines-between-class-members */
export type Result<T, E extends Error> = Success<T, E> | Failure<T, E>;

export class Success<T, E extends Error> {
  constructor(readonly value: T) {}
  isOk = (): this is Success<T, E> => true;
  isError = (): this is Failure<T, E> => false;
}

export class Failure<T, E extends Error> {
  constructor(readonly error: E) {}
  isOk = (): this is Success<T, E> => false;
  isError = (): this is Failure<T, E> => true;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withResult = <T, A extends any[], E extends Error>(
  fn: (...args: A) => Promise<T>,
) => async (...args: A): Promise<Success<T, E> | Failure<T, E>> => {
  try {
    return new Success(await fn(...args));
  } catch (err) {
    return new Failure(err as E);
  }
};
