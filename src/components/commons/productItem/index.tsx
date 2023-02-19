import * as S from "./productitem.styles";
import { IProductitemProps } from "./productitem.types";

export default function ProductItem(props: IProductitemProps) {
  const { images, name, price, tags, sellerName } = props;

  // 클릭시 디테일 페이지 이동
  console.log("name", name);

  return (
    <S.ProductItems>
      <S.Thumbnail>
        <S.Image src="#" alt="상품 이미지" />
        <S.Picked src="/icon/picked.png" alt="찜하기" />
      </S.Thumbnail>
      <S.ItemInfo>
        <div>
          <span>{tags}</span>
          <span>{price}</span>
        </div>
        <div>{sellerName}</div>
        <p>{name}</p>
      </S.ItemInfo>
    </S.ProductItems>
  );
}
