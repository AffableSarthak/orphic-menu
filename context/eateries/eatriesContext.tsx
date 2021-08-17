import { createContext } from "react";
import { AllDataType } from "../../types/eatries/eatries";

export type eatriesDataType = {
  isLoading: boolean;
  allData: AllDataType;
};

export const eatriesDefaultValue: eatriesDataType = {
  isLoading: false,
  allData: null,
};

const eatriesContext = createContext<eatriesDataType>(eatriesDefaultValue);

export default eatriesContext;
