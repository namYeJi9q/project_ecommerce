import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "@/src/commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";

export const CREATE_POINT_TRANSECTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

export const useMutationCreatePointTransactionOfLoading = () => {
  const mutation = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSECTION_OF_LOADING);

  return mutation;
};
