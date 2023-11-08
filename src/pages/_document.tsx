import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document(_props: DocumentProps) {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight&family=Inter:wght@200&display=swap"
          rel="stylesheet"
        />
        <style>{
          /* CSS */ `
            @media print {
              body {
                color: black !important;
                background: white !important;
              }
              .chakra-ui-dark {
                color: black !important;
                background: white !important;
              }
              
              .hide-print {
                display: none !important;
              }
              
              .print-block {
                display: block !important;
              }
            }
            
            .print-block {
              display: none;
            }
          `
        }</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
