import { GET_DATA } from "./eatriesActionType";

const eatriesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        allData: payload,
      };
  }
};

export default eatriesReducer;
