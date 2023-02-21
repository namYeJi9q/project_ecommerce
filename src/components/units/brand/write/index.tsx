import { IProductWriteProps } from "./write.types";
import { useRouter } from "next/router";
import * as S from "./write.styles";
import dynamic from "next/dynamic";
import { ICreateUseditemInput } from "@/src/commons/types/generated/types";
import { useMutationCreateUseditem } from "@/src/components/commons/hooks/useMutation/product/useMutationCreateUseditem";
import { useForm } from "react-hook-form";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import "react-quill/dist/quill.snow.css";
import { useRef, useState } from "react";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrls, setFileUrls] = useState(["", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const { onClickMoveToPage } = useMoveToPage();
  const { createUsedItemSubmit } = useMutationCreateUseditem();
  const { register, handleSubmit, setValue, trigger } =
    useForm<ICreateUseditemInput>({
      mode: "onChange",
    });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  return (
    <S.Wrapper>
      <h1>상품{props.isEdit ? "수정" : "등록"}</h1>
      <S.WriteWrapper onSubmit={handleSubmit(createUsedItemSubmit)}>
        <div>
          <S.WriteList>
            <span>상품명</span>
            <input
              type="text"
              placeholder="상품명을 작성해주세요"
              {...register("name")}
            />
          </S.WriteList>
          <S.WriteList>
            <span>상품 요약</span>
            <input
              type="text"
              placeholder="상품요약을 작성해주세요"
              {...register("remarks")}
            />
          </S.WriteList>
          <S.WriteList_contents>
            <span>상품 내용</span>
            <ReactQuill
              style={{
                minHeight: "300px",
                height: "auto",
                backgroundColor: "#fff",
                width: "80%",
              }}
              onChange={onChangeContents}
              placeholder="상품을 설명해주세요."
            />
          </S.WriteList_contents>
          <S.WriteList>
            <span>판매 가격</span>
            <input
              type="text"
              placeholder="판매 가격을 입력해주세요"
              {...register("price")}
            />
          </S.WriteList>
          <S.WriteList>
            <span>태그 입력</span>
            <input
              type="text"
              placeholder="#태그 #태그 #태그"
              {...register("tags")}
            />
          </S.WriteList>
          <S.AddressList>
            <span>브랜드 위치</span>
            <div>
              <div>map</div>
              <div>
                <div>
                  <input />
                  <button>우편번호 검색</button>
                </div>
                <input type="text" {...register("useditemAddress.address")} />
                <input
                  type="text"
                  {...register("useditemAddress.addressDetail")}
                />
              </div>
            </div>
          </S.AddressList>
          <S.FileUploadList>
            <span>사진 첨부</span>
            <input type="file" />
            <input type="file" />
            <div></div>
          </S.FileUploadList>
        </div>
        <S.ButtonWrap>
          <button type="button" onClick={onClickMoveToPage("/brand")}>
            취소
          </button>
          <button type="submit">{props.isEdit ? "수정" : "등록"}</button>
        </S.ButtonWrap>
      </S.WriteWrapper>
    </S.Wrapper>
  );
}
