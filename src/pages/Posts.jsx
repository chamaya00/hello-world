function Posts() {
  console.log('=== 5. POSTS.JSX COMPONENT RENDERING ===')
  console.log('Branch: main (static HTML posts)')
  console.log('This component uses hardcoded HTML, NOT getAllPosts()')
  console.log('Static posts being displayed: 5')
  console.log('  - Post 1: "Getting Started with Web Development in 2025"')
  console.log('  - Post 2: "Building Better APIs: Lessons Learned"')
  console.log('  - Post 3: "Why I Switched to a Minimal Tech Stack"')
  console.log('  - Post 4: "Understanding Async JavaScript"')
  console.log('  - Post 5: "My Favorite Developer Tools of 2024"')
  console.log('Posts are showing successfully!')
  console.log('=== END POSTS.JSX ===')

  return (
    <main className="container">
      <section>
        <h2>All Posts</h2>

        <article className="card">
          <h3><a href="#">Getting Started with Web Development in 2025</a></h3>
          <p className="meta">January 15, 2025 · 5 min read</p>
          <p>
            A comprehensive guide to starting your journey in web development, covering the essential
            tools and technologies you need to know. From choosing the right framework to understanding
            modern development practices, this post covers everything you need to get started.
          </p>
        </article>

        <article className="card">
          <h3><a href="#">Building Better APIs: Lessons Learned</a></h3>
          <p className="meta">January 10, 2025 · 7 min read</p>
          <p>
            Over the past year, I've learned valuable lessons about API design. Here are the key
            principles that have improved my work: consistency, documentation, versioning, and error
            handling. These practices have made my APIs more maintainable and easier to use.
          </p>
        </article>

        <article className="card">
          <h3><a href="#">Why I Switched to a Minimal Tech Stack</a></h3>
          <p className="meta">January 5, 2025 · 6 min read</p>
          <p>
            After years of working with complex frameworks and tooling, I decided to simplify. This post
            explores why less is often more when it comes to technology choices, and how embracing
            simplicity has made me more productive.
          </p>
        </article>

        <article className="card">
          <h3><a href="#">Understanding Async JavaScript</a></h3>
          <p className="meta">December 28, 2024 · 8 min read</p>
          <p>
            Asynchronous programming can be confusing, but it doesn't have to be. This deep dive explains
            promises, async/await, and event loops in a way that finally makes sense. Includes practical
            examples you can use in your own projects.
          </p>
        </article>

        <article className="card">
          <h3><a href="#">My Favorite Developer Tools of 2024</a></h3>
          <p className="meta">December 20, 2024 · 4 min read</p>
          <p>
            A curated list of the tools that made my development workflow more efficient this year. From
            code editors to terminal emulators, these are the tools I can't live without.
          </p>
        </article>
      </section>
    </main>
  )
}

export default Posts
