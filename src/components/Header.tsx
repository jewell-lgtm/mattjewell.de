import Link from "next/link"
import React from "react"
import { globals } from "../globals"

export const Header: React.FC = () => (
  <div className="header">
    <Link href="/Users/mattisfrommars/Code/mattjewell.de/src/pages">
      <a>{globals.siteName}</a>
    </Link>
    <div className="flex-spacer" />
    <a href="https://github.com/colinhacks/devii">GitHub</a>
    <Link href="/blog/the-ultimate-tech-stack">
      <a>Motivation</a>
    </Link>
  </div>
)
