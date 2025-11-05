import matter from 'gray-matter'
import { postData } from './postData'

console.log('Post data loaded:', Object.keys(postData))
console.log('Number of posts in postData:', Object.keys(postData).length)

// Parse and process all posts
export function getAllPosts() {
  try {
    console.log('getAllPosts called')

    const posts = Object.entries(postData).map(([slug, content]) => {
      console.log('Processing slug:', slug)
      console.log('Content length:', content?.length)

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
