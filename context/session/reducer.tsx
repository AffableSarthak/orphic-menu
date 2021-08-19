import { SET_INITIAL_DATA } from './actionType'

const sessionReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_INITIAL_DATA:
      return {
        ...state,
        tableId: payload.tableId,
        eateryId: payload.eateryId,
        gcSate: payload.gc,
      }
  }
}

export default sessionReducer
