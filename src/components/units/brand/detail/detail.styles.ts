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
  margin-bottom: 170px;
`;

export const ProductImg = styled.article`
  width: calc(100% / 2);
  aspect-ratio: 1.4/1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductInfo = styled.article`
  width: 51%;
  padding: 30px;
`;

export const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
  p {
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 9px;
  }
  h2 {
    font-weight: 700;
    font-size: 40px;
  }
`;

export const Info2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  div {
    min-width: 15%;
    display: flex;
    justify-content: space-between;
  }
  span {
    font-weight: 400;
    font-size: 12px;
  }
  strong {
    font-weight: 700;
    font-size: 14px;
    margin-right: 5px;
  }
`;

export const Picked = styled.div`
  padding-right: 30px;
  span {
    font-weight: 700;
  }
`;

export const Info3 = styled.div`
  border-top: 3px solid #555;
  border-bottom: 1px solid #c0c0c0;
  padding: 50px 25px 14px;
  display: flex;
  flex-direction: column;
  p {
    font-weight: 400;
    font-size: 20px;
  }
  span {
    font-weight: 500;
    font-size: 16px;
    color: #f65656;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 40px;
  button {
    font-weight: 400;
    font-size: 30px;
    color: #fff;
  }
`;

export const BuyNow = styled.button`
  width: 309px;
  height: 100px;
  background-color: #000;
  margin-right: 19px;
`;

export const ShoppingBag = styled.button`
  width: 436px;
  height: 100px;
  background-color: #555;
`;

export const DetailContents = styled.section`
  width: 100%;
  h2 {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 15px;
    padding-left: 60px;
  }
  hr {
    width: 100%;
    height: 3px;
    background-color: #555;
  }
  article {
    padding: 100px;
  }
`;

export const DeliveryInfo = styled.div`
  margin: 0 auto;
  padding: 90px;
  padding-bottom: 0;
  h3 {
    font-weight: 700;
    font-size: 32px;
  }
  p {
    font-weight: 400;
    font-size: 24px;
  }
  ul {
    margin-top: 30px;
  }
  ul li {
    list-style: inside;
    font-size: 24px;
    strong {
      font-weight: 700;
    }
  }
`;

export const Map = styled.div`
  width: 100%;
  aspect-ratio: 2/1;
`;
