import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'

function Posts() {
  console.log('=== POSTS.JSX DEBUG ===')
  console.log('1. Calling getAllPosts()...')

  const posts = getAllPosts()

  console.log('2. getAllPosts() returned:', posts)
  console.log('3. Type of posts:', typeof posts)
  console.log('4. Is posts an array?', Array.isArray(posts))
  console.log('5. Posts length:', posts?.length)
  console.log('6. Posts content:', JSON.stringify(posts, null, 2))
  console.log('7. Condition check - posts exists?', !!posts)
  console.log('8. Condition check - posts.length > 0?', posts?.length > 0)

  if (posts && posts.length > 0) {
    console.log('9. First post:', posts[0])
    console.log('10. First post slug:', posts[0]?.slug)
    console.log('11. First post title:', posts[0]?.title)
    console.log('12. First post excerpt:', posts[0]?.excerpt)
  }
  console.log('=== END POSTS.JSX DEBUG ===')

  return (
    <main className="container">
      <section>
        <h2>All Posts</h2>

        {posts && posts.length > 0 ? posts.map((post) => (
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
              {post.tags.length > 0 && (
                <span className="tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </span>
              )}
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

export default Posts
