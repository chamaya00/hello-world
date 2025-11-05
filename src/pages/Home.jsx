import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'

function Home() {
  console.log('=== HOME.JSX DEBUG ===')
  console.log('1. Calling getAllPosts()...')

  const posts = getAllPosts()

  console.log('2. getAllPosts() returned:', posts)
  console.log('3. Type of posts:', typeof posts)
  console.log('4. Is posts an array?', Array.isArray(posts))
  console.log('5. Posts length:', posts?.length)
  console.log('6. Posts content:', JSON.stringify(posts, null, 2))

  const recentPosts = posts.slice(0, 2) // Get first 2 posts

  console.log('7. recentPosts after slice(0, 2):', recentPosts)
  console.log('8. recentPosts length:', recentPosts?.length)
  console.log('9. recentPosts content:', JSON.stringify(recentPosts, null, 2))
  console.log('10. Condition check - recentPosts exists?', !!recentPosts)
  console.log('11. Condition check - recentPosts.length > 0?', recentPosts.length > 0)
  console.log('=== END HOME.JSX DEBUG ===')

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
