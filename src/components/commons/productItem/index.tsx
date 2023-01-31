import styled from "@emotion/styled";

const ProductItems = styled.article`
  width: calc(100% / 4 - 50px);
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background-color: #c4c4c4;
  position: relative;
`;
const Image = styled.img`
  object-fit: cover;
  object-position: center;
`;

const Picked = styled.img`
  position: absolute;
  top: 32px;
  right: 32px;
`;

const ItemInfo = styled.div`
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

export default function ProductItem() {
  return (
    <ProductItems>
      <Thumbnail>
        <Image src="#" alt="상품 이미지" />
        <Picked src="/icon/picked.png" alt="찜하기" />
      </Thumbnail>
      <ItemInfo>
        <div>
          <span>대표태그</span>
          <span>27,500</span>
        </div>
        <div>조이조이</div>
        <p>[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col...</p>
      </ItemInfo>
    </ProductItems>
  );
}
