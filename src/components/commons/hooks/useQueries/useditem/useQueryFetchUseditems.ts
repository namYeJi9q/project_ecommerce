import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      price
      tags
      seller {
        name
      }
    }
  }
`;

export const useQueryFetchUseditems = () => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  return query;
};
