import React from "react"
import Head from "next/head"
import { globals } from "@/globals"
import { ChakraProvider } from "@chakra-ui/react"
import { appTheme } from "@/styles/appTheme"

const App: React.FC = ({ Component, pageProps }: any) => {
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
      </ChakraProvider>
    </div>
  )
}

export default App
