import { useQueryFetchUseditem } from "@/src/components/commons/hooks/useQueries/useditem/useQueryFetchUseditem";
import { useRouter } from "next/router";
import * as S from "./detail.styles";

export default function BrandDetail() {
  const router = useRouter();
  const { data: ItemData } = useQueryFetchUseditem({
    useditemId: String(router.query.useditemId),
  });

  return (
    <S.Wrapper>
      <S.DetailHeader>
        <S.ProductImg>
          <S.Image
            src={`https://storage.googleapis.com/${
              ItemData?.fetchUseditem.images &&
              ItemData?.fetchUseditem.images[0]
            }`}
          />
        </S.ProductImg>
        <S.ProductInfo>
          <div>
            <p>{ItemData?.fetchUseditem.seller?.name}</p>
            <h2>{ItemData?.fetchUseditem.name}</h2>
          </div>
          <div></div>
          <div>
            <div>{ItemData?.fetchUseditem.remarks}</div>
            <div>{ItemData?.fetchUseditem.tags}</div>
          </div>
          <S.ButtonWrap>
            <button>BUY NOW</button>
            <button>SHOPPING BAG</button>
          </S.ButtonWrap>
        </S.ProductInfo>
      </S.DetailHeader>
      <S.DetailContents></S.DetailContents>
    </S.Wrapper>
  );
}
