import { accessTokenState } from "@/src/commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "@/src/commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { FETCH_USER_LOGGED_IN } from "../../useQueries/user/useQueryFetchUserLoggedIn";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const useMutationLoginUser = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onSubmitLogin = async (data: IMutationLoginUserArgs) => {
    try {
      const result = await loginUser({
        variables: {
          ...data,
        },
        refetchQueries: [{ query: FETCH_USER_LOGGED_IN }],
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (accessToken === undefined) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 시도해주세요." });
        return;
      }
      setAccessToken(accessToken);
      Modal.success({ content: `로그인에 성공했습니다.` });
      console.log("accessToken", accessToken);
      void router.push("/");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      Modal.error({ content: "로그인에 실패했습니다. 다시 시도해주세요." });
    }
  };

  return { onSubmitLogin };
};
