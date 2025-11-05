import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'

function Home() {
  const posts = getAllPosts()
  const recentPosts = posts.slice(0, 2) // Get first 2 posts

  return (
    <main className="container">
      <section className="hero">
        <h1 className="hero-title">Welcome to my corner of the internet</h1>
        <p className="hero-subtitle">
          I write about technology, share my projects, and document my journey in software development.
        </p>
      </section>

      <section className="featured">
        <h2>Recent Posts</h2>

        {recentPosts && recentPosts.length > 0 ? recentPosts.map((post) => (
          <article key={post.slug} className="card">
            <h3>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="meta">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p>{post.excerpt}</p>
          </article>
        )) : (
          <p>No posts available yet.</p>
        )}
      </section>
    </main>
  )
}

export default Home
