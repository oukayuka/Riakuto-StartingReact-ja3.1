/* eslint-disable max-classes-per-file, no-useless-constructor, lines-between-class-members */
export type Result<T, E extends Error> = Success<T, E> | Failure<T, E>;

export class Success<T, E extends Error> {
  constructor(readonly value: T) {}
  type = 'ok' as const;
  isOk = (): this is Success<T, E> => true;
  isError = (): this is Failure<T, E> => false;
}

export class Failure<T, E extends Error> {
  constructor(readonly value: E) {}
  type = 'error' as const;
  isOk = (): this is Success<T, E> => false;
  isError = (): this is Failure<T, E> => true;
}
