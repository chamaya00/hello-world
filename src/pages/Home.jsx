function Home() {
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

        <article className="card">
          <h3><a href="#">Getting Started with Web Development in 2025</a></h3>
          <p className="meta">January 15, 2025 · 5 min read</p>
          <p>
            A comprehensive guide to starting your journey in web development, covering the essential
            tools and technologies you need to know...
          </p>
        </article>

        <article className="card">
          <h3><a href="#">Building Better APIs: Lessons Learned</a></h3>
          <p className="meta">January 10, 2025 · 7 min read</p>
          <p>
            Over the past year, I've learned valuable lessons about API design. Here are the key
            principles that have improved my work...
          </p>
        </article>
      </section>
    </main>
  )
}

export default Home
