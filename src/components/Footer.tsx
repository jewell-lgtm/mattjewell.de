import React from "react"
import { globals } from "../globals"
import Image from "next/image"

export const Footer: React.FC = () => (
  <div className="footer">
    <p>{`© ${globals.yourName} ${new Date().getFullYear()}`}</p>
    <a href="/Users/mattisfrommars/Code/mattjewell.de/public/rss.xml">
      <Image src={"/img/rss-white.svg"} alt="RSS Feed" width={30} height={30} />
    </a>
  </div>
)
