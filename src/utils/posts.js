import matter from 'gray-matter'

// Import all markdown files from the posts directory
const postFiles = import.meta.glob('../posts/*.md', { eager: true, as: 'raw' })

// Parse and process all posts
export function getAllPosts() {
  const posts = Object.entries(postFiles).map(([filepath, content]) => {
    const { data, content: markdown } = matter(content)

    // Extract slug from filename
    const slug = filepath.replace('../posts/', '').replace('.md', '')

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
