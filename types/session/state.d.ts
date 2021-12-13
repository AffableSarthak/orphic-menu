/**
 *  Naming convention => Start With I and No "Type" in the Name
 */

interface Iprops {
  children: any;
  db: any;
  // sessionProps : any;
}

interface Icategory {
  name: string;
  src: string;
}

// <---------------------------------------->

interface IorderedItem {
  delivered: boolean;
  item: Iitem;
  itemId: string;
  note: string;
  ordered: boolean;
  qty: number;
}

interface IstagedItem {
  delivered: boolean;
  item: Iitem;
  itemId: string;
  note: string;
  ordered: boolean;
  qty: number;
  username: string;
  
}

interface IsessionInfoType {
  occupied: boolean;
  orderedItems: IorderedItem[];
  paid: boolean;
  sessionId: string;
  stagedItems: IstagedItem[];
  tableId: string;
}

interface IinitialState {
  isLoading: boolean;
  categories: Icategory[];
  orderedItems: IorderItem[];
  stagedItems: IstagedItem[];
  username: string;
  items: Iitem1[];
  currentItem: object | null;
  allItems: Iitem1[]
}
