import { createContext } from "react";

export type sessionDataType = {
  isLoading: boolean;
  setUsername: (username: string) => void;
  // getCategories: (eataryId: string) => void;
  populateGc: (gc: Igc[]) => void;
  // categories: Icategory[];
  categories: string[];
  username: any;
  items: Iitem1[];
  setCategoryItems: (categoryName: string) => void;
  gcState: Igc[];
  stagedItems: IstagedItem[];
  orderedItems: IorderedItem[];
  setStagedItem: (item: Iitem, type: string) => void;
  getCustForItem: (item: Iitem) => void;
  miniGC: Igc[];
  currentItem: any;
  setCurrentItem: (item: Iitem) => Promise<void>;
  getStagedItems: (sessionId: any) => void;
  // sessionInfo: IsessionInfoType;
  IncQtyForItem: (itemId: string, sessionId: string, idx: number) => void;
  DecQtyForItem: (itemId: string, sessionId: string, idx: number) => void;
  allItems: Iitem1[];
  setAllItems: (data: Iitem1[]) => void;
  setCategories: (data: string[]) => void;
};

export const sessionDefaultValue: sessionDataType = {
  isLoading: false,
  setUsername: () => null,
  populateGc: () => null,
  categories: [],
  username: "",
  items: [],
  setCategoryItems: () => null,
  gcState: [],
  stagedItems: [],
  orderedItems: [],
  setStagedItem: () => null,
  getCustForItem: () => null,
  miniGC: [],
  currentItem: {},
  setCurrentItem: () => Promise.resolve(),
  getStagedItems: () => null,
  // sessionInfo: null,
  IncQtyForItem: () => null,
  DecQtyForItem: () => null,
  allItems: [],
  setAllItems: () => null,
  setCategories: () => null
};

const sessionContext = createContext<sessionDataType>(sessionDefaultValue);

export default sessionContext;
