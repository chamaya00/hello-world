// Automatically import ALL markdown files from the projects directory!
// No need to manually add imports - just drop a new .md file in src/projects/
const modules = import.meta.glob('../projects/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

console.log('Project modules loaded:', Object.keys(modules))
console.log('Number of projects:', Object.keys(modules).length)

// Simple browser-compatible frontmatter parser (same as posts)
function parseFrontmatter(markdown) {
  // Check if content starts with ---
  if (!markdown.startsWith('---')) {
    return { data: {}, content: markdown }
  }

  // Find the closing ---
  const endOfFrontmatter = markdown.indexOf('---', 3)
  if (endOfFrontmatter === -1) {
    return { data: {}, content: markdown }
  }

  // Extract frontmatter and content
  const frontmatterText = markdown.substring(3, endOfFrontmatter).trim()
  const content = markdown.substring(endOfFrontmatter + 3).trim()

  // Parse frontmatter (simple YAML parsing)
  const data = {}
  const lines = frontmatterText.split('\n')

  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const key = line.substring(0, colonIndex).trim()
    let value = line.substring(colonIndex + 1).trim()

    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.substring(1, value.length - 1)
    }

    // Parse arrays (e.g., tech: ["React", "JavaScript"])
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.substring(1, value.length - 1)
        .split(',')
        .map(item => item.trim().replace(/['"]/g, ''))
        .filter(item => item.length > 0)
    }

    // Parse booleans
    if (value === 'true') value = true
    if (value === 'false') value = false

    // Parse numbers
    if (value !== '' && !isNaN(value)) {
      const num = Number(value)
      if (!isNaN(num)) value = num
    }

    data[key] = value
  }

  return { data, content }
}

// Get and process all projects
export function getAllProjects() {
  try {
    console.log('getAllProjects called')
    console.log('Project modules:', modules)

    const projects = Object.entries(modules)
      .filter(([filepath]) => !filepath.includes('PROJECT_TEMPLATE')) // Ignore template file
      .map(([filepath, content]) => {
        console.log('Processing project:', filepath)

        // Extract slug from filepath
        const slug = filepath.replace('../projects/', '').replace('.md', '')

        const { data, content: markdown } = parseFrontmatter(content)

        console.log('Parsed project frontmatter:', data)

        return {
          slug,
          title: data.title || 'Untitled Project',
          tech: data.tech || [],
          description: data.description || '',
          liveUrl: data.liveUrl || '#',
          githubUrl: data.githubUrl || '#',
          featured: data.featured || false,
          order: data.order || 999, // Projects without order go to end
          content: markdown,
          metadata: data
        }
      })

    console.log('Total projects created:', projects.length)
    console.log('Projects:', projects)

    // Sort by order (ascending), then by title
    return projects.sort((a, b) => {
      if (a.order !== b.order) {
        return a.order - b.order
      }
      return a.title.localeCompare(b.title)
    })
  } catch (error) {
    console.error('Error loading projects:', error)
    console.error('Error details:', error.message)
    console.error('Error stack:', error.stack)
    return []
  }
}

// Get a single project by slug
export function getProjectBySlug(slug) {
  const projects = getAllProjects()
  return projects.find(project => project.slug === slug)
}

// Get only featured projects
export function getFeaturedProjects() {
  const projects = getAllProjects()
  return projects.filter(project => project.featured)
}

// Get projects by technology
export function getProjectsByTech(tech) {
  const projects = getAllProjects()
  return projects.filter(project =>
    project.tech.some(t => t.toLowerCase() === tech.toLowerCase())
  )
}

// Get all unique technologies
export function getAllTechnologies() {
  const projects = getAllProjects()
  const techSet = new Set()
  projects.forEach(project => {
    project.tech.forEach(t => techSet.add(t))
  })
  return Array.from(techSet).sort()
}
