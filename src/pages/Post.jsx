import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '../utils/posts'

function Post() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('📄 POST.JSX: Component function called')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  // Get slug from URL
  const { slug } = useParams()
  console.log('📦 Step 1: Getting slug from URL')
  console.log('   ✓ useParams() called')
  console.log('   📝 Slug from URL:', slug)

  // Find post by slug
  console.log('📦 Step 2: Calling getPostBySlug()')
  console.log('   ✓ Searching for post...')

  const post = getPostBySlug(slug)

  if (!post) {
    console.error('❌ ERROR: Post not found!')
    console.error('   Slug searched:', slug)
    console.log('   → Redirecting to /posts')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    return <Navigate to="/posts" replace />
  }

  console.log('   ✅ SUCCESS: Post found!')
  console.log('   📝 Post title:', post.title)
  console.log('   📝 Post author:', post.author)
  console.log('   📝 Post date:', post.date)
  console.log('   📝 Post tags:', post.tags)

  console.log('📦 Step 3: About to render post content with ReactMarkdown')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

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
          {post.tags && post.tags.length > 0 && (
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
