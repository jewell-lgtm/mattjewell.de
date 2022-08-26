import Head from "next/head"
import Image from "next/image"
import { generateRSS } from "../rssUtil"
import { Markdown } from "../components/Markdown"
import { PostData, loadBlogPosts, loadMarkdownFile } from "../loader"
import { PostCard } from "../components/PostCard"

const Home = (props: {
  introduction: string
  readme: string
  posts: PostData[]
}) => {
  if (Math.random() > 0) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src="/logo.png"
          width={800}
          height={200}
          alt="Matthew Jewell Consulting"
        />
        <p>
          All the codes, all the time{" "}
          <a
            href="https://www.linkedin.com/in/mattjewell1/details/experience/"
            target="_blank"
            rel="noreferrer"
          >
            since 2011
          </a>
          . Site &copy; {new Date().getFullYear()}
        </p>
      </div>
    )
  }
  return (
    <div className="content">
      <Head>
        <title>Matt Jewell</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="introduction">
        <h1>Introduction to Devii</h1>
        <Markdown source={props.introduction} />
      </div>

      <div className="section">
        <h2>My blog posts</h2>
        <p>
          This section demonstrates the power of dynamic imports. Every Markdown
          file under <code>/md/blog</code> is automatically parsed into a
          structured TypeScript object and available in the{" "}
          <code>props.posts</code> array. These blog post {'"cards"'} are
          implemented in the
          <code>/components/PostCard.tsx</code> component.
        </p>
        <div className="post-card-container">
          {props.posts.map(post => {
            return <PostCard post={post} key={post.path} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile("introduction.md")
  const readmeFile = await import(`../${"README.md"}`)
  const readme = readmeFile.default
  const posts = await loadBlogPosts()

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts)

  const props = {
    introduction: introduction.contents,
    readme: readme,
    posts,
  }

  return { props }
}
