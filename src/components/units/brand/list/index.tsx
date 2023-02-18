import { useMoveToPage } from "@/src/components/commons/hooks/customs/useMoveToPage";
import ProductItem from "@/src/components/commons/productItem";
import * as S from "./list.styles";

export default function BrandMain() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.BrandWrapper>
      <S.BestWrap>
        <S.BestTitle>BEST</S.BestTitle>
      </S.BestWrap>
      <div>
        <S.SubmitButton onClick={onClickMoveToPage("/brand/new")}>
          상품등록
        </S.SubmitButton>
        <div>검색</div>
      </div>
      <S.ProductItemWrap>
        <ProductItem />
      </S.ProductItemWrap>
    </S.BrandWrapper>
  );
}
