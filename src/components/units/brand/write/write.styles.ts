import styled from "@emotion/styled";

export const Wrapper = styled.main`
  width: 100%;
  padding: 90px;
  h1 {
    font-size: 40px;
    font-weight: 700;
    padding: 40px;
  }
`;

export const WriteWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  section {
    border-top: 3px solid #555;
    border-bottom: 3px solid #555;
  }
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
  border-bottom: 1px solid #999;

  span {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 28px;
  }
`;

export const AddressList_Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Map = styled.div`
  width: 384px;
  height: 252px;
`;

export const Address = styled.div`
  width: calc(100% - 384px - 26px);
  display: flex;
  flex-direction: column;
  input {
    height: 56px;
    margin-bottom: 24px;
    padding: 16px;
  }
  button {
    width: 124px;
    height: 51px;
    background-color: #555;
    color: #fff;
    margin-left: 16px;
  }
`;

export const FileUploadList = styled.article`
  width: 100%;
  padding: 26px 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  span {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const UploadBtnWrap = styled.div`
  width: 140px;
  height: 140px;
  position: relative;
  margin-right: 24px;
`;

export const InputImg = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 140px;
  opacity: 0;
  border: 0;
  cursor: pointer;
`;

export const ModalImg = styled.button`
  position: absolute;
  width: 140px;
  height: 140px;
  margin-right: 24px;
  top: 0;
  background-color: #bdbdbd;
  color: #4f4f4f;
  cursor: pointer;
`;

export const ShowImg = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  margin-right: 24px;
  cursor: pointer;
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

export const CancelButton = styled.button`
  color: #000;
  border: 1px solid #000;
  margin-right: 16px;
`;

export const SubmitButton = styled.button`
  color: #fff;
  background-color: #000;
`;
