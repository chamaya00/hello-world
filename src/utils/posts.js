// Automatically import ALL markdown files from the posts directory!
// No need to manually add imports - just drop a new .md file in src/posts/
const modules = import.meta.glob('../posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})

console.log('Modules loaded:', Object.keys(modules))
console.log('Number of modules:', Object.keys(modules).length)

// Simple browser-compatible frontmatter parser (no Node.js Buffer needed!)
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

    // Parse arrays (e.g., tags: ["React", "JavaScript"])
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value.substring(1, value.length - 1)
        .split(',')
        .map(item => item.trim().replace(/['"]/g, ''))
        .filter(item => item.length > 0)
    }

    data[key] = value
  }

  return { data, content }
}

// Parse and process all posts
export function getAllPosts() {
  try {
    console.log('getAllPosts called')
    console.log('Modules object:', modules)
    console.log('Modules entries:', Object.entries(modules))

    const posts = Object.entries(modules)
      .filter(([filepath]) => !filepath.includes('POST_TEMPLATE')) // Ignore template file
      .map(([filepath, content]) => {
        console.log('Processing:', filepath)
        console.log('Content type:', typeof content)
        console.log('Content preview:', content?.substring(0, 100))

        // Extract slug from filepath
        const slug = filepath.replace('../posts/', '').replace('.md', '')

        const { data, content: markdown } = parseFrontmatter(content)

        console.log('Parsed frontmatter:', data)

        return {
          slug,
          title: data.title,
          date: data.date,
          author: data.author,
          tags: data.tags || [],
          excerpt: data.excerpt,
          content: markdown,
          metadata: data
        }
      })

    console.log('Total posts created:', posts.length)
    console.log('Posts:', posts)

    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error('Error loading posts:', error)
    console.error('Error details:', error.message)
    console.error('Error stack:', error.stack)
    return []
  }
}

// Get a single post by slug
export function getPostBySlug(slug) {
  const posts = getAllPosts()
  return posts.find(post => post.slug === slug)
}

// Get posts by tag
export function getPostsByTag(tag) {
  const posts = getAllPosts()
  return posts.filter(post => post.tags.includes(tag))
}

// Get all unique tags
export function getAllTags() {
  const posts = getAllPosts()
  const tags = new Set()
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}
