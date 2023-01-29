import { accessTokenState } from "@/src/commons/stores";
import { IMutation } from "@/src/commons/types/generated/types";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const useMutationLogoutUser = () => {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const [logout] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const onSubmitLogout = async () => {
    try {
      await logout();
      void router.push("/");
      setAccessToken("");
      Modal.success({ content: `로그아웃 되었습니다.` });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { onSubmitLogout };
};
