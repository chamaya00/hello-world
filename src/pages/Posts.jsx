import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

function Posts() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('📰 POSTS.JSX: Component function called')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  console.log('📦 Step 1: Importing posts from ../data/posts')
  console.log('   ✓ Import successful!')
  console.log('   📊 Total posts available:', posts.length)
  console.log('   📝 Posts array:', posts)

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

  console.log('📦 Step 2: Sorting posts by date')
  console.log('   ✓ Sorted by date (newest first)')
  console.log('   📊 Sorted posts count:', sortedPosts.length)

  console.log('📦 Step 3: About to render JSX')
  console.log('   ✓ Will display', sortedPosts.length, 'posts')

  if (sortedPosts.length === 0) {
    console.error('❌ ERROR: No posts to display!')
  } else {
    console.log('   ✅ SUCCESS: Posts ready to render')
    sortedPosts.forEach((post, index) => {
      console.log(`   ${index + 1}. "${post.title}" (${post.date})`)
    })
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  return (
    <main className="container">
      <section>
        <h2>All Posts</h2>

        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
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
