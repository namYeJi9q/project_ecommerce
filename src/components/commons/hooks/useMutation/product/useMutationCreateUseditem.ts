import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "@/src/commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        name
      }
    }
  }
`;

export const useMutationCreateUseditem = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);
  return mutation;
};
