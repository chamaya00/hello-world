import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'

function Posts() {
  const posts = getAllPosts()

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
