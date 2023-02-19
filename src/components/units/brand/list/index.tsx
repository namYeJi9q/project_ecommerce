import { IUseditem } from "@/src/commons/types/generated/types";
import { useMoveToPage } from "@/src/components/commons/hooks/customs/useMoveToPage";
import { useQueryFetchUseditemsOfTheBest } from "@/src/components/commons/hooks/useQueries/useditem/useQueryFetchUseditemsOfTheBest";
import ProductItem from "@/src/components/commons/productitem";
import * as S from "./list.styles";

export default function BrandMain() {
  const { onClickMoveToPage } = useMoveToPage();

  const { data: BestItemsData } = useQueryFetchUseditemsOfTheBest();
  return (
    <S.BrandWrapper>
      <S.BestWrap>
        <S.BestTitle>BEST</S.BestTitle>
        {BestItemsData?.fetchUseditemsOfTheBest.map((el) => {
          <ProductItem
            key={el._id}
            name={el.name}
            price={el.price}
            tags={el.tags}
            images={el.images}
            sellerName={el.seller?.name}
          />;
        })}
      </S.BestWrap>
      <div>
        <S.SubmitButton onClick={onClickMoveToPage("/brand/new")}>
          상품등록
        </S.SubmitButton>
        <div>검색</div>
      </div>
      <S.ProductItemWrap>{/* <ProductItem /> */}</S.ProductItemWrap>
    </S.BrandWrapper>
  );
}
