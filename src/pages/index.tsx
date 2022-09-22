import Head from "next/head"
import { generateRSS } from "@/rssUtil"
import { loadBlogPosts, PostData } from "@/loader"
import { Splash } from "@/components/Splash"
import { Hero } from "@/components/landing-page"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"

interface Props {
  posts: PostData[]
}

const Home = ({ posts }: Props) => {
  const router = useRouter()
  console.log("router.query", router.query)

  if (!router.query.new) {
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

      <Hero />

      <div style={{ display: "none" }} aria-hidden>
        <h3>Blog Posts</h3>
        <ul>
          {posts.map((post, i) => (
            <li key={i}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await loadBlogPosts()

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts)

  const props = {
    posts,
  }

  return { props }
}
