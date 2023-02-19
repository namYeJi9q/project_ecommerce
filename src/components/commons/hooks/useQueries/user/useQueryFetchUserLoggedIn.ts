import { IQuery } from "@/src/commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    _id
    email
    name
  }
`;

export const useQueryFetchUserLoggedIn = () => {
  const query =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return query;
};
