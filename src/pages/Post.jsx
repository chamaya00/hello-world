import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '../utils/posts'

function Post() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/posts" replace />
  }

  return (
    <main className="container">
      <article className="post-content">
        <Link to="/posts" className="back-link">← Back to all posts</Link>

        <header className="post-header">
          <h1>{post.title}</h1>
          <p className="meta">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            {post.author && <span> · {post.author}</span>}
          </p>
          {post.tags.length > 0 && (
            <div className="tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
          )}
        </header>

        <div className="markdown-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}

export default Post
