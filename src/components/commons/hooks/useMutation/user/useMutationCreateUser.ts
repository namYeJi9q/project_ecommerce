import {
  ICreateUserInput,
  IMutation,
  IMutationCreateUserArgs,
} from "@/src/commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`;

export const useMutationCreateUser = () => {
  const router = useRouter();
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const createUserSubmit = async (data: ICreateUserInput) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            ...data,
          },
        },
      });
      Modal.success({ content: "회원가입이 완료되었습니다." });
      void router.push("/login");
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      Modal.error({ content: "회원가입에 실패하였습니다. 다시 시도해주세요." });
    }
  };

  return {
    createUserSubmit,
  };
};
