import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { globals } from "@/globals";
import { appTheme } from "@/styles/appTheme";
import { AppProps } from "next/app";
import { useSmoothScrolling } from "@/hooks/useSmoothScrolling";
import { Footer } from "@/components/Footer";

const App = ({ Component, pageProps }: AppProps) => {
  useSmoothScrolling();

  return (
    <div className="container">
      <Head>
        <title>Matthew Jewell Consulting</title>
        {globals.googleAnalyticsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
              }}
            ></script>
          </>
        )}
      </Head>

      <ChakraProvider theme={appTheme()}>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </div>
  );
};

export default App;
