import { Maybe } from "@/src/commons/types/generated/types";

export interface IProductitemProps {
  name: string;
  price: Maybe<number> | undefined;
  tags: Maybe<string[]> | undefined;
  images: Maybe<string[]> | undefined;
  sellerName: string | undefined;
}
