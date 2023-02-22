import { IUseditem } from "@/src/commons/types/generated/types";
import { useQueryFetchUseditem } from "@/src/components/commons/hooks/useQueries/useditem/useQueryFetchUseditem";
import KakaoMapPage from "@/src/components/commons/map";
import { useRouter } from "next/router";
import * as S from "./detail.styles";

export default function BrandDetail() {
  const router = useRouter();
  const { data: ItemData } = useQueryFetchUseditem({
    useditemId: String(router.query.useditemId),
  });

  const onClickBasket = (_id: any) => () => {
    // 1. 기존 장바구니 가져오기
    const baskets: IUseditem[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    ); // const baskets = [{writer: "철수", ...}]

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((el) => el._id === _id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    // 3. 해당 장바구니에 담기
    baskets.push(_id);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
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
          <S.InfoTitle>
            <p>{ItemData?.fetchUseditem.seller?.name}</p>
            <h2>{ItemData?.fetchUseditem.name}</h2>
          </S.InfoTitle>
          <S.Info2>
            <div>
              <span>판매가</span>
              <span>
                <strong>{ItemData?.fetchUseditem.price}</strong>원
              </span>
            </div>
            <S.Picked>
              <span>MY</span>
              <span>❤️</span>
              <span>Product</span>
            </S.Picked>
          </S.Info2>
          <S.Info3>
            <p>{ItemData?.fetchUseditem.remarks}</p>
            <span>{ItemData?.fetchUseditem.tags}</span>
          </S.Info3>
          <S.ButtonWrap>
            <S.BuyNow>BUY NOW</S.BuyNow>
            <S.ShoppingBag onClick={onClickBasket(ItemData?.fetchUseditem._id)}>
              SHOPPING BAG
            </S.ShoppingBag>
          </S.ButtonWrap>
        </S.ProductInfo>
      </S.DetailHeader>
      <S.DetailContents>
        <h2>DETAIL</h2>
        <hr />
        <article>
          {ItemData?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.Image key={el} src={`https://storage.googleapis.com/${el}`} />
            ))}
          {ItemData?.fetchUseditem.contents}
          <S.DeliveryInfo>
            <h3>배송/교환/반품/AS 관련 유의사항</h3>
            <p>
              상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
              안내사항보다 우선 적용됩니다.
            </p>
            <S.Map>
              <KakaoMapPage />
            </S.Map>
            <ul>
              <li>
                상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이
                달라집니다.
              </li>
              <li>
                상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은
                배송이 불가합니다.
              </li>
              <li>
                <strong>
                  상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품
                  택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래
                  등에서의 소비자보호에 관한 법률 제18조(청약 철회 등) 9항에
                  의거 소비자의 사정에 의한 청약 철회 시 택배비는 소비자
                  부담입니다.)
                </strong>
              </li>
              <li>
                주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는
                점 양해 부탁드립니다.
              </li>
              <li>
                반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여
                주십시오.
              </li>
              <li>
                제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품
                부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부
                포장재를 훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외)
                반품/교환이 불가합니다.
              </li>
              <li>
                A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련
                문의는 에이블리 고객센터를 통해 부탁드립니다.
              </li>
              <li>
                상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에
                관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라
                받으실 수 있습니다.
              </li>
            </ul>
          </S.DeliveryInfo>
        </article>
      </S.DetailContents>
      <section>
        <h2>Q & A</h2>
        <hr />
      </section>
    </S.Wrapper>
  );
}
