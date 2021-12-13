/**
 *  Naming convention => Start With I and No "Type" in the Name
 */

// Item Type
interface Iitem {
  bannerUrl: string;
  category: string;
  cust?: string[];
  desc: string;
  itemId: string;
  itemName: string;
  objectUrl: string;
  price: string;
  customization?: any;
  subCategory?: string;
  label?:string;
}

// Item Type
interface Iitem1 {
  _id: string;
  modelUrl: string;
  imageUrl: string;
  isNonVeg: boolean;
  rate: string;
  subCategory: string;
  mainCategory: string;
  description: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Igcvalue {
  name: string;
  price: number;
}
interface Igc {
      id: string;
      name: string;
      type: string;
      values: Igcvalue[]
}


interface Icategory {
  name: string;
  src: string;
  bgColor : string;
}

interface Icategory1 {
  name: string
}