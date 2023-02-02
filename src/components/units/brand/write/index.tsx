import { IProductWrite, IProductWriteProps } from "./write.types";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/router";
import * as S from "./write.styles";
import dynamic from "next/dynamic";
import { ICreateUseditemInput } from "@/src/commons/types/generated/types";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();

  //   const { register, handleSubmit, setValue, trigger } =
  //     useForm<IProductWrite>();

  //   const onChangeContents = (value: string) => {
  //     setValue("contents", value === "<p><br></p>" ? "" : value);
  //     void trigger("contents");
  //   };

  return (
    <S.Wrapper>
      <h1>상품{props.isEdit ? "수정" : "등록"}</h1>
      <S.WriteWrapper>
        <div>
          <S.WriteList>
            <span>상품명</span>
            <input
              type="text"
              placeholder="상품명을 작성해주세요"
              //   {...register("name")}
            />
          </S.WriteList>
          <S.WriteList>
            <span>상품 요약</span>
            <input
              type="text"
              placeholder="상품요약을 작성해주세요"
              //   {...register("remarks")}
            />
          </S.WriteList>
          <S.WriteList>
            <span>상품 내용</span>
            <ReactQuill
              style={{ height: "300px" }}
              //   onChange={onChangeContents}
            />
          </S.WriteList>
          <S.WriteList>
            <span>판매 가격</span>
            <input
              type="text"
              placeholder="판매 가격을 입력해주세요"
              //   {...register("price")}
            />
          </S.WriteList>
          <S.WriteList>
            <span>태그 입력</span>
            <input
              type="text"
              placeholder="#태그 #태그 #태그"
              //   {...register("tags")}
            />
          </S.WriteList>
          <S.AddressList>
            <span>브랜드 위치</span>
            <div>
              {/* <input type="text" {...register("useditemAddress.address")} /> */}
              <input
                type="text"
                // {...register("useditemAddress.addressDetail")}
              />
            </div>
          </S.AddressList>
          <S.FileUploadList>
            <span>사진 첨부</span>
            <input type="file" />
          </S.FileUploadList>
        </div>
        <S.ButtonWrap>
          <button>취소</button>
          <button>수정</button>
        </S.ButtonWrap>
      </S.WriteWrapper>
    </S.Wrapper>
  );
}
