import { Link } from 'react-router-dom'
import { getAllPosts } from '../utils/posts'

function Home() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('🏠 HOME.JSX: Component function called')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  console.log('📦 Step 1: Calling getAllPosts() from ../utils/posts')
  const posts = getAllPosts()
  console.log('   ✓ getAllPosts() called successfully!')
  console.log('   📊 Total posts available:', posts.length)
  console.log('   📝 Posts array:', posts)

  // Get the 2 most recent posts
  const recentPosts = posts.slice(0, 2)

  console.log('📦 Step 2: Getting recent posts')
  console.log('   ✓ Taking first 2 posts (already sorted by getAllPosts)')
  console.log('   📊 Recent posts count:', recentPosts.length)
  console.log('   📝 Recent posts:', recentPosts)

  console.log('📦 Step 3: About to render JSX')
  console.log('   ✓ Will display', recentPosts.length, 'posts')

  if (recentPosts.length === 0) {
    console.error('❌ ERROR: No recent posts to display!')
  } else {
    console.log('   ✅ SUCCESS: Posts ready to render')
    recentPosts.forEach((post, index) => {
      console.log(`   ${index + 1}. "${post.title}" (${post.date})`)
    })
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  return (
    <main className="container">
      <section className="hero">
        <h1 className="hero-title">Thoughts on work and AI</h1>
        <p className="hero-subtitle">
          I write about what I think AI will do for knowledge work, particularly coding, data science, and communication.
        </p>
      </section>

      <section className="featured">
        <h2>Recent Posts</h2>

        {recentPosts && recentPosts.length > 0 ? (
          recentPosts.map((post) => (
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
          ))
        ) : (
          <p>No posts available yet.</p>
        )}
      </section>
    </main>
  )
}

export default Home
