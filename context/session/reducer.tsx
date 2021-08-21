import {
  SET_CATEGORIES,
  SET_USERNAME,
  SET_CATEGORY_ITEM,
  SET_STAGED,
} from './actionType'

const sessionReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      }
    case SET_USERNAME:
      return {
        ...state,
        username: payload,
      }
    case SET_CATEGORY_ITEM:
      return {
        ...state,
        items: payload,
      }
    case SET_STAGED:
      console.log(payload, 'payload setstage case from reducer')
      return {
        ...state,
        // stagedItem: [...state.stagedItem, payload],
        // stagedItem: [payload],
        stagedItems: [...state.stagedItems, payload],
      }
  }
}

export default sessionReducer
