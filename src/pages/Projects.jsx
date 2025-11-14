import { getAllProjects } from '../utils/projects'

function Projects() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('💼 PROJECTS.JSX: Component function called')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  console.log('📦 Step 1: Calling getAllProjects() from ../utils/projects')
  const projects = getAllProjects()
  console.log('   ✓ getAllProjects() called successfully!')
  console.log('   📊 Total projects available:', projects.length)
  console.log('   📝 Projects array:', projects)

  console.log('📦 Step 2: About to render JSX')
  console.log('   ✓ Will display', projects.length, 'projects')

  if (projects.length === 0) {
    console.error('❌ ERROR: No projects to display!')
  } else {
    console.log('   ✅ SUCCESS: Projects ready to render')
    projects.forEach((project, index) => {
      console.log(`   ${index + 1}. "${project.title}" [${project.tech.join(', ')}]`)
    })
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  return (
    <main className="container">
      <section>
        <h2>Projects</h2>
        <p className="hero-subtitle" style={{ marginBottom: '48px' }}>
          A collection of things I've built and contributed to.
        </p>

        {projects.length > 0 ? (
          projects.map((project) => (
            <article key={project.slug} className="project-card">
              <h3>{project.title}</h3>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <div className="project-links">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Project</a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
              </div>
            </article>
          ))
        ) : (
          <p>No projects available yet.</p>
        )}
      </section>
    </main>
  )
}

export default Projects
