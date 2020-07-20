/* eslint-disable @typescript-eslint/explicit-function-return-type  */
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import getMembers from 'domains/github/services/get-members';
import { userSlice } from 'redux/user';

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
    const users = yield call(getMembers, orgCode);

    yield put(
      getMembersSucceeded({
        params: { orgCode },
        result: { users },
      }),
    );
  } catch (error) {
    yield put(getMembersFailed({ params: { orgCode }, error }));
  }
}

export function* watchGetMembers() {
  yield takeLatest(getMembersStarted, runGetMembers);
}

export default function* userSaga() {
  yield all([fork(watchGetMembers)]);
}
