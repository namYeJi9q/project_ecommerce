export interface IProductWriteProps {
  isEdit: boolean;
}

export interface IProductWrite {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: [string];
  useditemAddress?: {
    address: string;
    zipcode?: string;
    addressDetail?: string;
  };
  images?: [string];
}
