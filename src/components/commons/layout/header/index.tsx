import { accessTokenState } from "@/src/commons/stores";
import { useRecoilState } from "recoil";
import Image from "next/image";
import Link from "next/link";
import * as S from "./header.styles";
import { useMutationLogoutUser } from "../../hooks/useMutation/user/useMutationLogoutUser";
import { useQuery } from "@apollo/client";
import { IQuery } from "@/src/commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../../hooks/useQueries/user/useQueryFetchUserLoggedIn";

export default function LayoutHeader() {
  const [accessToken] = useRecoilState(accessTokenState);
  const { onSubmitLogout } = useMutationLogoutUser();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickLogout = () => {
    onSubmitLogout();
  };

  return (
    <S.HeaderWrap>
      <S.HeaderContents>
        <div>
          <Link href="/">
            <Image
              src="/logo/dingco-logo1.png"
              alt="logo"
              width="181px"
              height="49px"
            />
          </Link>
        </div>
        <S.HeaderList>
          {accessToken ? (
            <>
              <li>
                {data?.fetchUserLoggedIn.name}님 포인트{" "}
                {data?.fetchUserLoggedIn.userPoint?.amount}P
              </li>
              <li>
                <span>충전</span>
              </li>
              <li>
                <span onClick={onClickLogout}>로그아웃</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">로그인</Link>
              </li>
              <li onClick={onClickLogout}>
                <Link href="/signup">회원가입</Link>
              </li>
            </>
          )}
          <S.ShoppingBag>장바구니</S.ShoppingBag>
        </S.HeaderList>
      </S.HeaderContents>
    </S.HeaderWrap>
  );
}
