import { globalStyles } from "@/src/commons/styles/globalStyles";
import ApolloSetting from "@/src/components/commons/apollo";
import Layout from "@/src/components/commons/layout";
import "@/styles/globals.css";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
