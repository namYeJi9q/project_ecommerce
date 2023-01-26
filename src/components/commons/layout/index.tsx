import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutLoginHeader from "./loginHeader";
import LayoutNav from "./nav";
import LayoutSignupHeader from "./signupHeader";

const LayoutBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const HIDDEN_HEADER = ["/login", "/signup"];
  const SHOW_LOGIN_HEADER = ["/login"];
  const SHOW_SIGNUP_HEADER = ["/signup"];
  const SHOW_BANNER = ["/"];

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isShowLoginHeader = SHOW_LOGIN_HEADER.includes(router.asPath);
  const isShowSignupHeader = SHOW_SIGNUP_HEADER.includes(router.asPath);
  const isShowBanner = SHOW_BANNER.includes(router.asPath);
  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {isShowLoginHeader && <LayoutLoginHeader />}
      {isShowSignupHeader && <LayoutSignupHeader />}
      <LayoutNav />
      {isShowBanner && <LayoutBanner />}
      <LayoutBody>{props.children}</LayoutBody>
      <LayoutFooter />
    </>
  );
}
