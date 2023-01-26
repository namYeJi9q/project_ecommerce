import styled from "@emotion/styled";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 40px;
  margin: 90px 0;
`;

const Line = styled.div`
  width: 90%;
  height: 3px;
  background-color: #555;
  margin-bottom: 90px;
`;

const InputWrapper = styled.article`
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

const InputList = styled.div`
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

export default function LoginPage() {
  return (
    <Wrapper>
      <H1>LOGIN</H1>
      <Line />
      <InputWrapper>
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
        </InputList>
        <button>로그인</button>
      </InputWrapper>
    </Wrapper>
  );
}
