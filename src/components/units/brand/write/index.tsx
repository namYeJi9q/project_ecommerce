import { IProductWriteProps } from "./write.types";
import { useRouter } from "next/router";
import * as S from "./write.styles";
import dynamic from "next/dynamic";
import { ICreateUseditemInput } from "@/src/commons/types/generated/types";
import { useMutationCreateUseditem } from "@/src/components/commons/hooks/useMutation/product/useMutationCreateUseditem";
import { useForm } from "react-hook-form";
import { useMoveToPage } from "../../../commons/hooks/customs/useMoveToPage";
import "react-quill/dist/quill.snow.css";
import { ChangeEvent, useRef, useState } from "react";
import KakaoMapPage from "@/src/components/commons/map";
import { useMutationUploadFile } from "@/src/components/commons/hooks/useMutation/product/useMutationUploadFile";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [uploadFile] = useMutationUploadFile();
  const [createUseditem] = useMutationCreateUseditem();
  const { onClickMoveToPage } = useMoveToPage();

  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  const { register, handleSubmit, setValue, trigger } =
    useForm<ICreateUseditemInput>({
      mode: "onChange",
    });

  const handleComplete = (address: Address) => {
    console.log(address);
    setValue("useditemAddress.zipcode", address.zonecode);
    setValue("useditemAddress.address", address.address);
    setIsOpen(false);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]; // files. <input type="file" multiple /> ??? ??? ????????? ????????? ??????.
      if (file === undefined) return;
      await uploadFile({ variables: { file } });

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          console.log(event.target?.result); // ??????????????? event.target.id??? ?????? eslint??? ????????? ?????? : event.target??? ???????????? ???????????? ??????
          const tempUrls = [...fileUrls];
          tempUrls[index] = event.target?.result;
          setFileUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const onClickSubmit = async (data: ICreateUseditemInput) => {
    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          tags: [String(data.tags)],
          useditemAddress: {
            address: data.useditemAddress?.address,
            zipcode: data.useditemAddress?.zipcode,
            addressDetail: data?.useditemAddress?.addressDetail,
          },
          images: fileUrls,
        },
      },
    });
    Modal.success({ content: "????????? ????????? ?????????????????????!!!" });
    router.push(`/brand/${result.data?.createUseditem._id}`);
  };

  return (
    <S.Wrapper>
      <h1>??????{props.isEdit ? "??????" : "??????"}</h1>
      <S.WriteWrapper onSubmit={handleSubmit(onClickSubmit)}>
        <section>
          <S.WriteList>
            <span>?????????</span>
            <input
              type="text"
              placeholder="???????????? ??????????????????"
              {...register("name")}
            />
          </S.WriteList>
          <S.WriteList>
            <span>?????? ??????</span>
            <input
              type="text"
              placeholder="??????????????? ??????????????????"
              {...register("remarks")}
            />
          </S.WriteList>
          <S.WriteList_contents>
            <span>?????? ??????</span>
            <ReactQuill
              style={{
                minHeight: "300px",
                height: "auto",
                backgroundColor: "#fff",
                width: "80%",
              }}
              onChange={onChangeContents}
              placeholder="????????? ??????????????????."
            />
          </S.WriteList_contents>
          <S.WriteList>
            <span>?????? ??????</span>
            <input
              type="text"
              placeholder="?????? ????????? ??????????????????"
              {...register("price")}
            />
          </S.WriteList>
          <S.WriteList>
            <span>?????? ??????</span>
            <input
              type="text"
              placeholder="#?????? #?????? #??????"
              {...register("tags")}
            />
          </S.WriteList>
          <S.AddressList>
            <span>????????? ??????</span>
            <S.AddressList_Flex>
              <S.Map>
                <KakaoMapPage />
              </S.Map>
              <S.Address>
                <div>
                  <input
                    type="text"
                    {...register("useditemAddress.zipcode")}
                    placeholder="07258"
                    readOnly
                  />
                  <button type="button" onClick={showModal}>
                    ???????????? ??????
                  </button>
                  {isOpen && (
                    <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
                      <DaumPostcodeEmbed onComplete={handleComplete} />
                    </Modal>
                  )}
                </div>
                <input
                  type="text"
                  {...register("useditemAddress.address")}
                  readOnly
                />
                <input
                  type="text"
                  {...register("useditemAddress.addressDetail")}
                />
              </S.Address>
            </S.AddressList_Flex>
          </S.AddressList>
          <S.FileUploadList>
            <span>?????? ??????</span>
            <S.ImgWrap>
              <S.UploadBtnWrap>
                {fileUrls[0] ? (
                  <S.ShowImg src={fileUrls[0]} alt="?????? ????????? 1" />
                ) : (
                  <S.ModalImg type="button">
                    <p>+</p>
                    <p>Upload</p>
                  </S.ModalImg>
                )}
                <S.InputImg type="file" onChange={onChangeFile(0)} />
              </S.UploadBtnWrap>
              <S.UploadBtnWrap>
                {fileUrls[1] ? (
                  <S.ShowImg src={fileUrls[1]} alt="?????? ????????? 2" />
                ) : (
                  <S.ModalImg type="button">
                    <p>+</p>
                    <p>Upload</p>
                  </S.ModalImg>
                )}
                <S.InputImg type="file" onChange={onChangeFile(1)} />
              </S.UploadBtnWrap>
            </S.ImgWrap>
          </S.FileUploadList>
        </section>
        <S.ButtonWrap>
          <S.CancelButton type="button" onClick={onClickMoveToPage("/brand")}>
            ??????
          </S.CancelButton>
          <S.SubmitButton type="submit">
            {props.isEdit ? "??????" : "??????"}
          </S.SubmitButton>
        </S.ButtonWrap>
      </S.WriteWrapper>
    </S.Wrapper>
  );
}
