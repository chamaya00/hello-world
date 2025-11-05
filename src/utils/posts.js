import matter from 'gray-matter'

// Use import.meta.glob to load all markdown files
const modules = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' })

// Parse and process all posts
export function getAllPosts() {
  try {
    const posts = Object.entries(modules).map(([filepath, content]) => {
      // Extract slug from filepath
      const slug = filepath.replace('../posts/', '').replace('.md', '')

      const { data, content: markdown } = matter(content)

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

    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error('Error loading posts:', error)
    console.error('Error details:', error.message)
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
