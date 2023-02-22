import styled from "@emotion/styled";
import React from "react";
import { Select } from "antd";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 333px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  h1 {
    padding-top: 36px;
    margin-bottom: 40px;
  }
`;

export const PayInput = styled(Select)`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  border-bottom: 2px solid #000;
  margin-bottom: 40px;
  font-size: 16px;
  color: #828282;
  .ant-select-selector {
    border: none;
  }
  option {
    font-weight: 400;
    font-size: 16px;
    color: #e0e0e0;
    background-color: #fff;
  }
`;

export const PaymentBtn = styled.button`
  width: 384px;
  height: 51px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
`;
