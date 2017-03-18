import { ChangeTodo } from 'business-logic/intents'
import { equals, not } from 'ramda'
import { call, put, take } from 'redux-saga/effects'
import { CheckboxOnChangeType, LabelDoubleClickType, TextInputOnKeyPressType } from 'utils/events'

const changeTodo = function * (params) {
  yield put(ChangeTodo(params))
}

export const onCheckboxChange = function * () {
  while (true) {
    const { checked, className, id } = yield take(CheckboxOnChangeType)
    if (equals(className, 'toggle')) {
      yield call(changeTodo, { id, completed: checked })
    }
  }
}

export const onLabelDoubleClick = function * () {
  while (true) {
    const { id } = yield take(LabelDoubleClickType)
    yield call(changeTodo, { id, editing: true })
  }
}

export const onTextInputKeyPress = function * () {
  while (true) {
    const { className, id, key, value } = yield take(TextInputOnKeyPressType)
    if (equals(key, 'Enter') && equals(className, 'edit') && not(equals(value, ''))) {
      yield call(changeTodo, { id, editing: false, text: value })
    }
  }
}
