/* eslint-disable @typescript-eslint/no-explicit-any */
export type SucceededPayload<P, R> = {
  params: P;
  result: R;
};

export interface FailedPayload<P, E extends Error> {
  params: P;
  error: E;
}
