import styled from "@emotion/styled";

export const ProductItems = styled.article`
  width: calc(100% / 4 - 50px);
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background-color: #c4c4c4;
  position: relative;
`;
export const Image = styled.img`
  object-fit: cover;
  object-position: center;
`;

export const Picked = styled.img`
  position: absolute;
  top: 32px;
  right: 32px;
`;

export const ItemInfo = styled.div`
  padding: 18px;
  div:first-child {
    span {
      font-size: 20px;
      font-weight: 700;
    }
    span:first-child {
      color: #f65656;
      margin-right: 14px;
    }
  }
  div:nth-child(2) {
    margin: 13px 0;
    color: #555;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #555;
  }
`;
