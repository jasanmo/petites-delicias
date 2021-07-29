import Layout from "../../components/layout"
import Container from '../../components/container'
import Header from '../../components/header'
import PostPreview from '../../components/post-preview'
import PostTitle from '../../components/post-title'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { getAllCategories, getPostsCategory } from '../../lib/api'

export default function Category ({posts, title}) {

  const router = useRouter()
  const allPosts = posts?.edges

  /* if (!router.isFallback) {
    return <ErrorPage statusCode={404} />
  } */

  return (
    <Layout>
      <Container>
        <Header />
        <h1>{title}</h1>
          {router.isFallback
          ? <PostTitle>Loading…</PostTitle>
          : allPosts.map( ({ node }) => (
            <PostPreview
              key={node?.id}
              title={node?.title}
              coverImage={node?.featuredImage?.node}
              date={node?.date}
              author={node?.author.node}
              slug={node?.slug}
              excerpt={node?.excerpt}
            />
          ))}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostsCategory(params.slug)

  console.log(params)
  
  return {
    props: {
      posts: data.posts,
      title: data.name
    },
  }
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories()

  return {
    paths: allCategories.nodes.map(({slug}) => `/categories/${slug}`) || [],
    fallback: true,
  }
} 