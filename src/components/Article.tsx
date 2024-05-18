'use client'

import { Suspense, use } from 'react'
import { BlogResponse, getBlog } from '~/services/Blog'

const BlogPosts = ({ blog }: { blog: Promise<BlogResponse[]> }) => {
  const resolvedBlog = use(blog)

  return (
    <>
      {resolvedBlog.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <div>{p.email}</div>
          <div>{p.address.city}</div>
        </div>
      ))}
    </>
  )
}

export const Article = () => {
  return (
    <div>
      <h1>Article</h1>
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPosts blog={getBlog()} />
      </Suspense>
    </div>
  )
}
