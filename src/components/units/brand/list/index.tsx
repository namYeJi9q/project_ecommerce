import { IUseditem } from "@/src/commons/types/generated/types";
import { useMoveToPage } from "@/src/components/commons/hooks/customs/useMoveToPage";
import { useQueryFetchUseditem } from "@/src/components/commons/hooks/useQueries/useditem/useQueryFetchUseditem";
import { useQueryFetchUseditems } from "@/src/components/commons/hooks/useQueries/useditem/useQueryFetchUseditems";
import { useQueryFetchUseditemsOfTheBest } from "@/src/components/commons/hooks/useQueries/useditem/useQueryFetchUseditemsOfTheBest";
import ProductItem from "@/src/components/commons/productitem";
import SearchUseditemPage from "@/src/components/commons/search/useditem.serch";
import InfiniteScroll from "react-infinite-scroller";
import { useState } from "react";
import * as S from "./list.styles";

export default function BrandMain() {
  const { onClickMoveToPage } = useMoveToPage();
  const [keyword, setKeyword] = useState("");

  const { data: BestItemsData } = useQueryFetchUseditemsOfTheBest();
  const { data: ItemsData, refetch, fetchMore } = useQueryFetchUseditems();

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const onLoadMore = () => {
    if (!ItemsData) return;

    void fetchMore({
      variables: { page: Math.ceil(ItemsData?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <S.BrandWrapper>
      <S.BestWrap>
        <S.BestTitle>BEST</S.BestTitle>
        <S.BestItems>
          {BestItemsData?.fetchUseditemsOfTheBest.map((el) => (
            <ProductItem key={el._id} data={el} />
          ))}
        </S.BestItems>
      </S.BestWrap>
      <S.MiddleSection>
        <S.SubmitButton onClick={onClickMoveToPage("/brand/new")}>
          상품등록
        </S.SubmitButton>
        <SearchUseditemPage
          refetch={refetch}
          onChangeKeyword={onChangeKeyword}
        />
      </S.MiddleSection>

      <div style={{ height: "850px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <S.ProductItemWrap>
            {ItemsData?.fetchUseditems.map((el: IUseditem) => (
              <ProductItem key={el._id} data={el} />
            ))}
          </S.ProductItemWrap>
        </InfiniteScroll>
      </div>
    </S.BrandWrapper>
  );
}
