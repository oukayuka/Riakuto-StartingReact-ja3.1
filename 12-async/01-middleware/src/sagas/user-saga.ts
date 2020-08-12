/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types */
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { userSlice } from 'features/user';
import { User, getMembers } from 'domains/github';

const {
  getMembersStarted,
  getMembersSucceeded,
  getMembersFailed,
} = userSlice.actions;

function* runGetMembers(
  action: ReturnType<typeof userSlice.actions.getMembersStarted>,
) {
  const { orgCode } = action.payload;

  try {
    const users = (yield call(getMembers, orgCode)) as User[];

    yield put(
      getMembersSucceeded({
        params: { orgCode },
        result: { users },
      }),
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(getMembersFailed({ params: { orgCode }, error }));
    }
  }
}

export function* watchGetMembers() {
  yield takeLatest(getMembersStarted, runGetMembers);
}

export default function* userSaga() {
  yield all([fork(watchGetMembers)]);
}
