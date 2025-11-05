import matter from 'gray-matter'

// Import posts directly as a workaround
import reactPostRaw from '../posts/getting-started-with-react.md?raw'
import apisPostRaw from '../posts/building-better-apis.md?raw'
import designPostRaw from '../posts/thoughts-on-minimal-design.md?raw'

const modules = {
  '../posts/getting-started-with-react.md': reactPostRaw,
  '../posts/building-better-apis.md': apisPostRaw,
  '../posts/thoughts-on-minimal-design.md': designPostRaw
}

console.log('Modules loaded:', Object.keys(modules))
console.log('Number of modules:', Object.keys(modules).length)
console.log('Sample content length:', reactPostRaw?.length)

// Parse and process all posts
export function getAllPosts() {
  try {
    console.log('getAllPosts called')
    console.log('Modules object:', modules)
    console.log('Modules entries:', Object.entries(modules))

    const posts = Object.entries(modules).map(([filepath, content]) => {
      console.log('Processing:', filepath)
      console.log('Content type:', typeof content)
      console.log('Content preview:', content?.substring(0, 100))

      // Extract slug from filepath
      const slug = filepath.replace('../posts/', '').replace('.md', '')

      const { data, content: markdown } = matter(content)

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
