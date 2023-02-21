import { useRouter } from "next/router";
import { MouseEvent } from "react";
import * as S from "./productitem.styles";
import { IProductitemProps } from "./productitem.types";

export default function ProductItem(props: IProductitemProps) {
  const router = useRouter();
  const { data } = props;
  const onClickMoveToDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/brand/${event.currentTarget.id}`);
  };

  return (
    <S.ProductItems onClick={onClickMoveToDetail} id={data?._id}>
      <S.Thumbnail>
        {data?.images !== null && data?.images !== undefined ? (
          <S.Image src={`https://storage.googleapis.com/${data.images[0]}`} />
        ) : (
          <S.Image src="/default.png" />
        )}
        <S.Picked src="/icon/picked.png" alt="찜하기" />
      </S.Thumbnail>
      <S.ItemInfo>
        <div>
          <span>{data?.tags}</span>
          <span>{data?.price}</span>
        </div>
        <div>{data?.seller?.name}</div>
        <p>{data?.name}</p>
      </S.ItemInfo>
    </S.ProductItems>
  );
}
