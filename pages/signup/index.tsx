import { useMutationCreateUser } from "@/src/components/commons/hooks/useMutation/user/useMutationCreateUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./signup.validation";
import * as S from "./signup.styles";
import { ISignupFormState } from "./signup.types";

export default function SignupPage() {
  const { createUserSubmit } = useMutationCreateUser();

  const { register, handleSubmit, formState } = useForm<ISignupFormState>({
    resolver: yupResolver(signupSchema),
  });

  const onClickSubmit = (data: ISignupFormState) => {
    const { passwordCheck, ...value } = data;
    createUserSubmit(value);
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(onClickSubmit)}>
      <S.H1>JOIN MEMBER</S.H1>
      <S.Line />
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
        <S.Error>{formState.errors.password?.message}</S.Error>

        <div>
          <span>비밀번호 확인</span>
          <input
            type="password"
            placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
            {...register("passwordCheck")}
          />
        </div>
        <S.Error>{formState.errors.passwordCheck?.message}</S.Error>

        <div>
          <span>이름</span>
          <input type="text" placeholder="ex) 홍길동" {...register("name")} />
        </div>
        <S.Error>{formState.errors.name?.message}</S.Error>
      </S.InputList>

      <S.Line2 />
      <S.ButtonWrap>
        <S.DeleteButton>취소</S.DeleteButton>
        <S.ConfirmButton>확인</S.ConfirmButton>
      </S.ButtonWrap>
    </S.Wrapper>
  );
}
