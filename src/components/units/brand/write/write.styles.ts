import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  padding: 90px;
  h1 {
    font-size: 40px;
    font-weight: 700;
    padding: 40px;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      top: 120px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #555;
    }
  }
`;

export const WriteWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const WriteList = styled.article`
  width: 100%;
  padding: 26px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;

  span {
    font-weight: 500;
    font-size: 24px;
    width: 20%;
  }
  input {
    width: 80%;
    height: 56px;
    background: #e9e9e9;
    color: #a9a9a9;
    font-weight: 400;
    font-size: 15px;
    padding-left: 19px;
  }
`;

export const WriteList_contents = styled(WriteList)`
  align-items: flex-start;
  .ql-container.ql-snow {
    border: none;
  }
`;

export const AddressList = styled.article`
  width: 100%;
  padding: 26px 40px;
  display: flex;
  flex-direction: column;
  span {
    font-weight: 500;
    font-size: 24px;
  }
`;

export const FileUploadList = styled.article`
  width: 100%;
  padding: 26px 40px;
  display: flex;
  flex-direction: column;
  span {
    font-weight: 500;
    font-size: 24px;
  }
`;

export const ButtonWrap = styled.article`
  padding: 73px 0;
  display: flex;
  justify-content: center;
  button {
    width: 195px;
    height: 77px;
  }
`;
