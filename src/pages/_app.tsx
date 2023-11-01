import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Footer } from "@/components/Footer";
import { globals } from "@/globals";
import { useSmoothScrolling } from "@/hooks/useSmoothScrolling";
import { appTheme } from "@/styles/appTheme";

function App({ Component, pageProps }: AppProps) {
  useSmoothScrolling();

  return (
    <>
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

      <ChakraProvider theme={appTheme}>
        <Flex flexDirection="column" minH="100vh">
          <Box as="main" flex={1}>
            <Component {...pageProps} />
          </Box>

          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  );
}

export default App;
