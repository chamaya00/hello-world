function Projects() {
  return (
    <main className="container">
      <section>
        <h2>Projects</h2>
        <p className="hero-subtitle" style={{ marginBottom: '48px' }}>
          A collection of things I've built and contributed to.
        </p>

        <article className="project-card">
          <h3>TaskFlow - A Minimalist Task Manager</h3>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">PostgreSQL</span>
          </div>
          <p>
            A clean, distraction-free task management app that helps you focus on what matters. Built
            with a focus on speed and simplicity, featuring keyboard shortcuts, drag-and-drop
            organization, and offline support.
          </p>
          <div className="project-links">
            <a href="#">View Project</a>
            <a href="#">GitHub</a>
          </div>
        </article>

        <article className="project-card">
          <h3>DevDocs - Documentation Generator</h3>
          <div className="tech-stack">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">Markdown</span>
          </div>
          <p>
            An automated documentation generator that parses your codebase and creates beautiful,
            searchable documentation. Supports multiple programming languages and integrates with popular
            CI/CD pipelines.
          </p>
          <div className="project-links">
            <a href="#">View Project</a>
            <a href="#">GitHub</a>
          </div>
        </article>

        <article className="project-card">
          <h3>CodeSnippet Library</h3>
          <div className="tech-stack">
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">CSS</span>
            <span className="tech-tag">HTML</span>
          </div>
          <p>
            A curated collection of reusable code snippets and components that I've found useful across
            different projects. Includes UI components, utility functions, and common patterns.
          </p>
          <div className="project-links">
            <a href="#">View Project</a>
            <a href="#">GitHub</a>
          </div>
        </article>

        <article className="project-card">
          <h3>API Monitor Dashboard</h3>
          <div className="tech-stack">
            <span className="tech-tag">Vue.js</span>
            <span className="tech-tag">Go</span>
            <span className="tech-tag">Redis</span>
            <span className="tech-tag">Docker</span>
          </div>
          <p>
            Real-time monitoring dashboard for REST APIs. Tracks response times, error rates, and uptime.
            Features customizable alerts and detailed analytics to help maintain API health.
          </p>
          <div className="project-links">
            <a href="#">View Project</a>
            <a href="#">GitHub</a>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Projects
