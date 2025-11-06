import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

function Home() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('🏠 HOME.JSX: Component function called')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  console.log('📦 Step 1: Importing posts from ../data/posts')
  console.log('   ✓ Import successful!')
  console.log('   📊 Total posts available:', posts.length)
  console.log('   📝 Posts array:', posts)

  // Get the 2 most recent posts
  const recentPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2)

  console.log('📦 Step 2: Getting recent posts')
  console.log('   ✓ Sorted by date (newest first)')
  console.log('   ✓ Taking first 2 posts')
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
        <h1 className="hero-title">Welcome to my corner of the internet</h1>
        <p className="hero-subtitle">
          I write about technology, share my projects, and document my journey in software development.
        </p>
      </section>

      <section className="featured">
        <h2>Recent Posts</h2>

        {recentPosts.length > 0 ? (
          recentPosts.map((post) => (
            <article key={post.id} className="card">
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
