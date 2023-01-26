import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 40px;
  margin: 90px auto;
`;

const Line = styled.div`
  width: 90%;
  height: 3px;
  background-color: #555;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const Line2 = styled.div`
  width: 90%;
  height: 2px;
  background-color: #555;
  margin: 0 auto;

  margin-bottom: 60px;
`;

const InputList = styled.div`
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

const ButtonWrap = styled.div`
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

const DeleteButton = styled.button`
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
`;

const ConfirmButton = styled.button`
  color: #fff;
  background-color: #000;
`;

export default function SignupPage() {
  return (
    <Wrapper>
      <H1>JOIN MEMBER</H1>
      <Line />
      <InputList>
        <div>
          <span>아이디</span>
          <input
            type="text"
            placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
          />
        </div>
        <div>
          <span>비밀번호</span>
          <input
            type="password"
            placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
          />
        </div>
        <div>
          <span>비밀번호 확인</span>
          <input
            type="password"
            placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
          />
        </div>
        <div>
          <span>이름</span>
          <input type="text" placeholder="ex) 홍길동" />
        </div>
      </InputList>

      <Line2 />
      <ButtonWrap>
        <DeleteButton>취소</DeleteButton>
        <ConfirmButton>확인</ConfirmButton>
      </ButtonWrap>
    </Wrapper>
  );
}
