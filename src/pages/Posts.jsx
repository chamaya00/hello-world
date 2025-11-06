import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'

function Posts() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('📰 POSTS.JSX: Component function called')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  console.log('📦 Step 1: Calling getAllPosts() from ../utils/posts')
  const posts = getAllPosts()
  console.log('   ✓ getAllPosts() called successfully!')
  console.log('   📊 Total posts available:', posts.length)
  console.log('   📝 Posts array:', posts)

  console.log('📦 Step 2: Posts already sorted by getAllPosts()')
  console.log('   ✓ Sorted by date (newest first)')
  console.log('   📊 Posts count:', posts.length)

  console.log('📦 Step 3: About to render JSX')
  console.log('   ✓ Will display', posts.length, 'posts')

  if (posts.length === 0) {
    console.error('❌ ERROR: No posts to display!')
  } else {
    console.log('   ✅ SUCCESS: Posts ready to render')
    posts.forEach((post, index) => {
      console.log(`   ${index + 1}. "${post.title}" (${post.date})`)
    })
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  return (
    <main className="container">
      <section>
        <h2>All Posts</h2>

        {posts && posts.length > 0 ? (
          posts.map((post) => (
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
                {post.tags && post.tags.length > 0 && (
                  <span className="tags">
                    {post.tags.map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </span>
                )}
              </p>
              <p>{post.excerpt}</p>
            </article>
          ))
        ) : (
          <p>No posts available yet.</p>
        )}
      </section>
    </main>
  )
}

export default Posts
