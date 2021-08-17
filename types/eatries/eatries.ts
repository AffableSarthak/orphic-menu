export interface Value {
  bannerUrl: string;
  category: string;
  cust: string[];
  desc: string;
  itemId: string;
  itemName: string;
  objectUrl: string;
  price: string;
}

export interface BistroClaytopiaAll {
  name: string;
  value: Value;
}

export interface Eateries {
  bistro_claytopia_all: BistroClaytopiaAll[];
}

export interface Values {
  Noodle: number;
  Rice: number;
  Penne?: number;
  Spaghetti?: number;
}

export interface Value2 {
  name: string;
  type: string;
  values: Values;
}

export interface GcType {
  name: string;
  value: Value2;
}

export interface AllDataType {
  eateries: Eateries;
  gc: GcType[];
}
