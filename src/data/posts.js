// Simple posts data - just plain JavaScript objects
// No markdown, no external files, no complexity

console.log('📁 posts.js: File loaded')

export const posts = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React in 2025',
    date: '2025-11-01',
    author: 'Charles Amaya',
    tags: ['React', 'JavaScript', 'Web Development'],
    excerpt: 'A beginner\'s guide to building modern web applications with React',
    content: `
      <h1>Getting Started with React in 2025</h1>
      <p>React has become one of the most popular JavaScript libraries for building user interfaces.</p>
      <h2>Why React?</h2>
      <ul>
        <li>Component-based architecture</li>
        <li>Reusable code</li>
        <li>Efficient state management</li>
      </ul>
    `
  },
  {
    id: 2,
    slug: 'building-better-apis',
    title: 'Building Better APIs: Lessons Learned',
    date: '2025-10-28',
    author: 'Charles Amaya',
    tags: ['APIs', 'Backend', 'Best Practices'],
    excerpt: 'Key principles for designing robust and developer-friendly APIs',
    content: `
      <h1>Building Better APIs: Lessons Learned</h1>
      <p>Good API design is about creating an intuitive, consistent experience for developers.</p>
      <h2>Consistency is King</h2>
      <p>When developers can predict how your API behaves, they can work faster.</p>
    `
  },
  {
    id: 3,
    slug: 'thoughts-on-minimal-design',
    title: 'Thoughts on Minimal Design',
    date: '2025-11-04',
    author: 'Charles Amaya',
    tags: ['Design', 'UX', 'Philosophy'],
    excerpt: 'Why less is often more when it comes to user interface design',
    content: `
      <h1>Thoughts on Minimal Design</h1>
      <p>Minimal design feels like a breath of fresh air in a world of complexity.</p>
      <h2>Respecting Attention</h2>
      <p>Every element on a page demands attention. Minimal design asks: is this worth it?</p>
    `
  }
]

console.log('📊 posts.js: Exported', posts.length, 'posts')
console.log('📝 posts.js: Post titles:', posts.map(p => p.title))
