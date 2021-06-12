/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import tw from "../../generated/tw"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div className={tw("space-y-3")}>
          <p>
            Written by{" "}
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              {author.name}
            </a>
            : {author?.summary || null}
          </p>
          <p>
            You can{` `}
            <a href={`https://twitter.com/${social?.twitter || ``}`}>hire me</a>
            {` `}as consulting CTO, trainer or developer. I'd prefer to speak
            directly with clients, so no recruiting agencies please.
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
