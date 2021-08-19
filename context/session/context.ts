import { createContext } from "react";


export type sessionDataType = {
  isLoading: boolean;
};

export const sessionDefaultValue: sessionDataType = {
  isLoading: false,

};

const sessionContext = createContext<sessionDataType>(sessionDefaultValue);

export default sessionContext;
