import { createContext } from "react";

export type sessionDataType = {
  isLoading: boolean;
  setUsername: (username: string) => void;
  getCategories: (eataryId: string) => void;
  populateGc: (gc: Igc[]) => void;
  categories: Icategory[];
  username: any;
  items: Iitem[];
  setCategoryItems: (categoryName: string) => void;
  gcState: Igc[];
  stagedItems: IstagedItem[];
  orderedItems: IorderedItem[];
  setStagedItem: (item: Iitem, type: string) => void;
  getStagedItems: (sessionId: any) => void;
  sessionInfo: IsessionInfoType;
  IncQtyForItem: (itemId: string, sessionId: string, ind: string) => void;
  DecQtyForItem: (itemId: string, sessionId: string, ind: string) => void;
};

export const sessionDefaultValue: sessionDataType = {
  isLoading: false,
  setUsername: () => null,
  getCategories: () => null,
  populateGc: () => null,
  categories: [],
  username: "",
  items: [],
  setCategoryItems: () => null,
  gcState: [],
  stagedItems: [],
  orderedItems: [],
  setStagedItem: () => null,
  getStagedItems: () => null,
  sessionInfo: null,
  IncQtyForItem: () => null,
  DecQtyForItem: () => null,
};

const sessionContext = createContext<sessionDataType>(sessionDefaultValue);

export default sessionContext;
