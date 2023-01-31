import { IProductWriteProps } from "./write.types";
import * as S from "./write.styles";

export default function ProductWrite(props: IProductWriteProps) {
  return (
    <S.Wrapper>
      <h1>상품{props.isEdit ? "수정" : "등록"}</h1>
    </S.Wrapper>
  );
}
