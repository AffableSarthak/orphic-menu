/**
 *  Naming convention => Start With I and No "Type" in the Name
 */

interface Iprops {
    children: any;
  db: any;
  sessionProps : any;
}

interface IorderItem {
  count : number
  userName :string;
  item : Iitem;
}

interface IinitialState {
    isLoading: boolean;
    categories : string[];
    orderedItems: IorderItem[];
    stagedItems: IorderItem[];
    username: string;
    items : Iitem[];
}