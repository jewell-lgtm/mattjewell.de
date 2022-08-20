import React from "react"
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula"
import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter"

const SyntaxHighlighter =
  typeof window === "undefined" ? PrismLight : PrismAsyncLight

export default function Code(props: { language: string; value?: string }) {
  const { language, value = "" } = props
  return (
    <SyntaxHighlighter
      language={(language === "ts" ? "typescript" : language) || "typescript"}
      style={darcula}
    >
      {value}
    </SyntaxHighlighter>
  )
}
