import * as yup from "yup";

export const signupSchema = yup.object({
  email: yup
    .string()
    .email("이메일 아이디를 @까지 정확하게 입력해주세요.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{8,16}$/, "비밀번호를 확인해주세요.")
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호를 확인해주세요."),
  name: yup.string().required("이름을 입력해주세요."),
});
