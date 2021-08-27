import { createContext } from "react";

export type sessionDataType = {
  isLoading: boolean;
  setUsername: (username: string) => void;
  // getCategories: (eataryId: string) => void;
  populateGc: (gc: Igc[]) => void;
  categories: Icategory[];
  username: any;
  items: Iitem[];
  setCategoryItems: (categoryName: string) => void;
  gcState: Igc[];
  stagedItems: IstagedItem[];
  orderedItems: IorderedItem[];
  setStagedItem: (item: Iitem, type: string) => void;
  getCustForItem: (item: Iitem) => void;
  miniGC: Igc[];
  currentItem: any;
  setCurrentItem: (item: Iitem) => Promise<void>;
  updateQytForItem: (itemId: string, newItemQty: number) => Promise<void>;
  getStagedItems: (sessionId: any) => void;
  // sessionInfo: IsessionInfoType;
};

export const sessionDefaultValue: sessionDataType = {
  isLoading: false,
  setUsername: () => null,
  populateGc:()=> null,
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
  updateQytForItem: (itemId: string, newItemQty: number) => Promise.resolve()
  // sessionInfo: null,
};

const sessionContext = createContext<sessionDataType>(sessionDefaultValue);

export default sessionContext;
