import { IMutationLoginUserArgs } from "@/src/commons/types/generated/types";
import { useMutationLoginUser } from "@/src/components/commons/hooks/useMutation/user/useMutationLoginUser";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./login.validation";

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

const InputWrapper = styled.form`
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

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 120px;
  padding: 4px 0;
`;

export default function LoginPage() {
  const { onSubmitLogin } = useMutationLoginUser();

  const { register, handleSubmit, formState } = useForm<IMutationLoginUserArgs>(
    {
      resolver: yupResolver(LoginSchema),
    }
  );

  const onClickLogin = (data: IMutationLoginUserArgs) => {
    onSubmitLogin(data);
  };

  return (
    <Wrapper>
      <H1>LOGIN</H1>
      <Line />
      <InputWrapper onSubmit={handleSubmit(onClickLogin)}>
        <InputList>
          <div>
            <span>아이디</span>
            <input
              type="text"
              placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
              {...register("email")}
            />
          </div>
          <Error>{formState.errors.email?.message}</Error>
          <div>
            <span>비밀번호</span>
            <input
              type="password"
              placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
              {...register("password")}
            />
          </div>
          {formState.errors.password && (
            <Error>{formState.errors.password?.message}</Error>
          )}
        </InputList>
        <button>로그인</button>
      </InputWrapper>
    </Wrapper>
  );
}
