import { globalStyles } from "@/src/commons/styles/globalStyles";
import Layout from "@/src/components/commons/layout";
import "@/styles/globals.css";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
