import { call, put, take } from 'redux-saga/effects'
import { LocationUpdate } from 'store/location/change-requests'
import { NavigatedToType } from 'utils/events'

const updateLocation = function * (name, options) {
  yield put(LocationUpdate({ name, options }))
}

export const onNavigatedTo = function * () {
  while (true) {
    const { name, options } = yield take(NavigatedToType)
    yield call(updateLocation, name, options)
  }
}
