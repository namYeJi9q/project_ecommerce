import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "@/src/commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ICreateUseditemInput } from "../../../../../commons/types/generated/types";

export const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const useMutationCreateUseditem = () => {
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const createUsedItemSubmit = async (data: ICreateUseditemInput) => {
    await createUseditem({
      variables: {
        createUseditemInput: {
          ...data,
        },
      },
    });
  };
  return { createUsedItemSubmit };
};
