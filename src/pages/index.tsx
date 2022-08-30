import Head from "next/head"
import { generateRSS } from "@/rssUtil"
import { Markdown } from "@/components/Markdown"
import { loadBlogPosts, loadMarkdownFile, PostData } from "@/loader"
import { PostCard } from "@/components/PostCard"
import { Splash } from "@/components/Splash"

const Home = (props: { introduction: string; posts: PostData[] }) => {
  if (Math.random() > 0) {
    return (
      <>
        <Head>
          <title>Matt Jewell</title>
        </Head>
        <Splash />
      </>
    )
  }
  return (
    <div className="content">
      <Head>
        <title>Matt Jewell</title>
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
  const posts = await loadBlogPosts()

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts)

  const props = {
    introduction: introduction.contents,
    posts,
  }

  return { props }
}
