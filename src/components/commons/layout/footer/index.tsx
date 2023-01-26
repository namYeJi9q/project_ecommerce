import styled from "@emotion/styled";
import Image from "next/image";

const FooterWrap = styled.section`
  width: 100%;
  height: 317px;
  padding: 50px 100px;
  background-color: #f1f1f1;
  border-top: 1px solid #555;
`;

const FooterContents = styled.article`
  margin-left: 15px;
  margin-top: 10px;
  p,
  div {
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

const Span1 = styled.span`
  margin-right: 95px;
`;

const Span2 = styled.span`
  margin-right: 43px;
`;

export default function LayoutFooter() {
  return (
    <FooterWrap>
      <Image
        src="/logo/dingco-logo 3.png"
        alt="로고 이미지"
        width="169px"
        height="52px"
      />
      <FooterContents>
        <div>
          <Span1>(주)딩코</Span1>
          <span>대표: 안우엽</span>
        </div>
        <p>사업자등록번호 717-87-02373</p>
        <p>주소: 서울특별시 구로구 디지털로 300, 패스트파이브</p>
        <p>학원 등록 번호: 제 5845호</p>
        <div>
          <Span2>개인정보 처리방침</Span2>
          <span>서비스 이용 약관</span>
        </div>
        <p>Copyright © 2022. Dingco Corp., Ltd.</p>
      </FooterContents>
    </FooterWrap>
  );
}
