import { SelectValue } from "antd/es/select";
import { AntdTreeNodeAttribute } from "antd/es/tree";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import { SetterOrUpdater } from "recoil";
import { IQuery } from "../../../commons/types/generated/types";
import { useMutationCreatePointTransactionOfLoading } from "../../commons/hooks/useMutation/point/useMutationCreatePointTransactionOfLoading";
import * as S from "./payment.styles";

declare const window: typeof globalThis & {
  IMP: any;
};

interface PaymentProps {
  setIsOpen: SetterOrUpdater<boolean>;
  data?: Pick<IQuery, "fetchUserLoggedIn"> | undefined;
}

export default function PaymentPage(props: PaymentProps) {
  const [point, setPoint] = useState(0);
  const [createPointTransactionOfLoading] =
    useMutationCreatePointTransactionOfLoading();

  const onClickPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "nice",
        pay_method: "card",
        name: "딩코 포인트 충전",
        amount: point,
        buyer_email: props.data?.fetchUserLoggedIn.email,
        buyer_name: props.data?.fetchUserLoggedIn.name,
        m_redirect_url: "http://localhost:3000/",
      },
      (rsp: any) => {
        if (rsp.success) {
          try {
            void createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            alert("결제에 성공하셨습니다!");
            location.reload();
          } catch (error) {
            if (error instanceof Error) {
              alert("결제에 실패했습니다! 다시 시도해 주세요!");
            }
          }
          props.setIsOpen(false);
        } else {
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
          props.setIsOpen(false);
        }
      }
    );
  };

  const onChangePoint = (event: ChangeEvent) => {
    console.log(event);
    setPoint(Number(event));
  };

  return (
    <S.Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <h1>충전하실 금액을 선택해주세요!</h1>
      <S.PayInput
        onChange={onChangePoint}
        placeholder="포인트 선택"
        showSearch
        style={{ width: "100%" }}
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        options={[
          {
            value: "100",
            label: "100",
          },
          {
            value: "500",
            label: "500",
          },
          {
            value: "2000",
            label: "2000",
          },
          {
            value: "5000",
            label: "5000",
          },
        ]}
      />
      <S.PaymentBtn onClick={onClickPayment}>충전하기</S.PaymentBtn>
    </S.Wrapper>
  );
}
