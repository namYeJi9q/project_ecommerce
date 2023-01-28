import { accessTokenState } from "@/src/commons/stores";
import { useRecoilState } from "recoil";
import Image from "next/image";
import Link from "next/link";
import * as S from "./header.styles";

export default function LayoutHeader() {
  const [accessToken] = useRecoilState(accessTokenState);

  const onClickLogout = () => {};
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
              <li>님 포인트</li>
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
              <li>
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
