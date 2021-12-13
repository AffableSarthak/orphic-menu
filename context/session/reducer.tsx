import {
  SET_CATEGORIES,
  SET_USERNAME,
  SET_CATEGORY_ITEM,
  SET_STAGED,
  SET_LOADING,
  GET_STAGED_ITEMS,
  UPDATE_QTY,
  SET_CURRENT_ITEM,
  SET_ALL_ITEMS,
} from "./actionType";

const sessionReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_CATEGORIES:
      console.log(payload)
      return {
        ...state,
        categories: payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case SET_CATEGORY_ITEM:
      return {
        ...state,
        items: payload,
      };
    case SET_STAGED:
      return {
        ...state,
        // stagedItem: [...state.stagedItem, payload],
        // stagedItem: [payload],
        stagedItems: [...state.stagedItems, payload],
      };
    case GET_STAGED_ITEMS:
      return {
        ...state,
        stagedItems: payload,
      };
    // case SET_SESSION_STATE:
    //   return {
    //     ...state,
    //     sessionInfo: payload,
    //   };
    case UPDATE_QTY:
      // console.log(payload.length);
      return {
        ...state,
        stagedItems: payload,
      };

    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: payload,
      };

    case SET_ALL_ITEMS: 
    return {
      ...state,
      allItems: payload
    }
  }
};

export default sessionReducer;
