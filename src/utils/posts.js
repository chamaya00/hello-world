import matter from 'gray-matter'

// Import markdown files directly
import reactPost from '../posts/getting-started-with-react.md?raw'
import apisPost from '../posts/building-better-apis.md?raw'
import designPost from '../posts/thoughts-on-minimal-design.md?raw'

// Define posts array
const postFiles = {
  'getting-started-with-react': reactPost,
  'building-better-apis': apisPost,
  'thoughts-on-minimal-design': designPost
}

// Parse and process all posts
export function getAllPosts() {
  try {
    const posts = Object.entries(postFiles).map(([slug, content]) => {
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
