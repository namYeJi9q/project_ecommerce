import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 40px;
  margin: 90px 0;
`;

export const Line = styled.div`
  width: 90%;
  height: 3px;
  background-color: #555;
  margin-bottom: 90px;
`;

export const InputWrapper = styled.form`
  display: flex;
  margin-bottom: 200px;
  button {
    width: 186px;
    height: 136px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
  }
`;

export const InputList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 30px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    display: block;
    font-size: 24px;
  }
  input {
    width: 611px;
    height: 56px;
    margin-left: 20px;
    padding: 18px;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 120px;
  padding: 4px 0;
`;
