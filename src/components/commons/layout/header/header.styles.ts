import styled from "@emotion/styled";
import { Modal } from "antd";

export const HeaderWrap = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const HeaderContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  div {
    cursor: pointer;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-right: 40px;
    cursor: pointer;
    font-size: 14px;
  }
`;

export const PaymentModal = styled(Modal)`
  width: 464px;
  height: 333px;
  border-radius: 10px;
  background-color: #fff;
  .ant-btn {
    display: none;
  }
  .ant-modal-close {
    color: black;
  }
`;

export const ShoppingBag = styled.li`
  position: relative;
  ::after {
    content: "0";
    position: absolute;
    top: 0;
    right: -25px;
    width: 20px;
    height: 20px;
    background-color: #f65656;
    color: #fff;
    font-size: 12px;
    border-radius: 50%;
    text-align: center;
    line-height: 22px;
  }
`;
