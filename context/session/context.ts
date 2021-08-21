import { createContext } from "react";


export type sessionDataType = {
  isLoading: boolean;
  setUsername: (username: string) => void;
  getCategories: (eataryId: string) => void;
  populateGc: (gc: Igc[]) => void;
  categories: any;
  username: any;
  items: any;
  setCategoryItems: (categoryName: string) => void;
  gcState: Igc[];
  stagedItems: any;
  orderedItems: any;
  setStagedItem: (item: Iitem, type: string) => void;

};

export const sessionDefaultValue: sessionDataType = {
  isLoading: false,
  setUsername: () => null,
  getCategories: () => null,
  populateGc:()=> null,
  categories: [],
  username:'',
  items: [],
  setCategoryItems: () => null,
  gcState: [],
  stagedItems: [],
  orderedItems: [],
  setStagedItem: () => null



};

const sessionContext = createContext<sessionDataType>(sessionDefaultValue);

export default sessionContext;
