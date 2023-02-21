import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 100%;
  padding: 68px 57px;
`;

export const DetailHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const ProductImg = styled.article`
  width: calc(100% / 2);
  aspect-ratio: 1.4/1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid red;
`;

export const ProductInfo = styled.article`
  width: 51%;
`;

export const DetailContents = styled.section`
  width: 100%;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 50px;
  button {
    font-weight: 400;
    font-size: 30px;
    color: #fff;
  }
`;
