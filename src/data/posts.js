// Simple posts data - just plain JavaScript objects
// No markdown, no external files, no complexity

console.log('📁 posts.js: File loaded')

export const posts = [
  {
    id: 4,
    slug: 'building-my-first-ai-agent',
    title: 'Building My First AI Agent',
    date: '2026-01-11',
    author: 'Charles Amaya',
    tags: ['AI Agents', 'Claude', 'SQL', 'Learning', 'Side Projects'],
    excerpt: 'Took my first shot at building an AI agent and was blown away by how quickly I could learn and launch something concrete.',
    content: `
      <h1>Building My First AI Agent</h1>
      <p>Took my first shot at building an AI agent on Friday night and again blown away by how quickly I'm able to learn new technical topics with Claude and then launch something concrete. I built a SQL coaching agent that generates a SQL question, runs the query you submit, and then gives constructive feedback on the query to help you get to the next level: <a href="https://www.levelupsql.com" target="_blank">www.levelupsql.com</a></p>

      <h2>Surprisingly Helpful Coaching</h2>
      <p>First thing that stood out was how accurate and actually helpful the coaching agent responses were, even though behind the scenes it's essentially a very detailed prompt template. I played with it at least 20 times, and every time I was like wow, this totally sounds like advice I might say, but only after giving the problem some deeper thought.</p>

      <h2>Just Scratching the Surface</h2>
      <p>Apparently (after I asked Claude to analyze my setup), the agent architecture for this website is considered a Level 0 agent, closer to prompt engineering rather than full "agentic AI". This means that it's only scratching the surface of what's possible, which surprised me a bit since I'm already pretty impressed with the outputs.</p>

      <h2>What's Next</h2>
      <p>Next step for me is to try building a full on "Teach this user SQL" agent, something that decides when to introduce and test new concepts vs reinforce older concepts vs connect concepts, etc. It's so cool to me that this is even technically approachable, and it's got me so excited to explore building out teaching agents that can hopefully help students learn and master new subjects more easily.</p>
    `
  },
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
