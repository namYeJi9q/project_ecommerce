import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 40px;
  margin: 90px auto;
`;

export const Line = styled.div`
  width: 90%;
  height: 3px;
  background-color: #555;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Line2 = styled.div`
  width: 90%;
  height: 2px;
  background-color: #555;
  margin: 0 auto;

  margin-bottom: 60px;
`;

export const InputList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  margin: 0 auto;
  margin-bottom: 40px;
  padding-left: 40px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    width: 170px;
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

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  button {
    width: 186px;
    height: 56px;
    margin: 0 10px;
    font-size: 20px;
  }
`;

export const DeleteButton = styled.button`
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
`;

export const ConfirmButton = styled.button`
  color: #fff;
  background-color: #000;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 120px;
  padding: 4px 0;
`;
