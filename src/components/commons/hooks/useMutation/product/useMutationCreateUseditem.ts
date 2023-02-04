import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const useMutationCreateUseditem = () => {
  const router = useRouter();
  const mutation = useMutation(CREATE_USEDITEM);

  return mutation;
};
