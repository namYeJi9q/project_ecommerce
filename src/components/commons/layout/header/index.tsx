import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const HeaderWrap = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const HeaderContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  div {
    cursor: pointer;
  }
`;

const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-right: 40px;
    cursor: pointer;
    font-size: 14px;
  }
`;

const ShoppingBag = styled.li`
  position: relative;
  ::after {
    content: "0";
    position: absolute;
    top: 0;
    right: -25px;
    width: 20px;
    height: 20px;
    background-color: #f65656;
    color: #fff;
    font-size: 12px;
    border-radius: 50%;
    text-align: center;
    line-height: 22px;
  }
`;

export default function LayoutHeader() {
  return (
    <HeaderWrap>
      <HeaderContents>
        <div>
          <Image
            src="/logo/dingco-logo 1.png"
            alt="logo"
            width="181px"
            height="49px"
          />
        </div>
        <HeaderList>
          <li>
            <Link href="/login">로그인</Link>
          </li>
          <li>
            <Link href="/signup">회원가입</Link>
          </li>
          <ShoppingBag>장바구니</ShoppingBag>
        </HeaderList>
      </HeaderContents>
    </HeaderWrap>
  );
}
