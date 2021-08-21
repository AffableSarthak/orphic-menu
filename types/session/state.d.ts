/**
 *  Naming convention => Start With I and No "Type" in the Name
 */

interface Iprops {
    children: any;
  db: any;
  // sessionProps : any;
}

interface IorderItem {
  count : number
  userName :string;
  item : Iitem;
}

interface Icategory {
  name: string;
  src:string;
}

interface IinitialState {
    isLoading: boolean;
    categories : Icategory[];
    orderedItems: IorderItem[];
    stagedItems: IorderItem[];
    username: string;
    items : Iitem[];
}