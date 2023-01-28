import { IMutationLoginUserArgs } from "@/src/commons/types/generated/types";
import { useMutationLoginUser } from "@/src/components/commons/hooks/useMutation/user/useMutationLoginUser";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./login.validation";
import * as S from "./login.styles";

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
    <S.Wrapper>
      <S.H1>LOGIN</S.H1>
      <S.Line />
      <S.InputWrapper onSubmit={handleSubmit(onClickLogin)}>
        <S.InputList>
          <div>
            <span>아이디</span>
            <input
              type="text"
              placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
              {...register("email")}
            />
          </div>
          <S.Error>{formState.errors.email?.message}</S.Error>
          <div>
            <span>비밀번호</span>
            <input
              type="password"
              placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
              {...register("password")}
            />
          </div>
          {formState.errors.password && (
            <S.Error>{formState.errors.password?.message}</S.Error>
          )}
        </S.InputList>
        <button>로그인</button>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
