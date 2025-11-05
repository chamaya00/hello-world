// Post data as JavaScript strings (temporary solution)
export const postData = {
  'getting-started-with-react': `---
title: "Getting Started with React in 2025"
date: "2025-11-01"
author: "Charles Amaya"
tags: ["React", "JavaScript", "Web Development"]
excerpt: "A beginner's guide to building modern web applications with React"
---

# Getting Started with React in 2025

React has become one of the most popular JavaScript libraries for building user interfaces. Whether you're building a simple personal website or a complex web application, React provides the tools you need to create dynamic, responsive experiences.

## Why React?

React's component-based architecture makes it easy to:

- **Reuse code** across your application
- **Manage state** efficiently
- **Build complex UIs** from simple, isolated pieces
- **Think declaratively** about your UI

## Your First Component

Here's a simple React component:

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>
}
\`\`\`

This functional component takes a \`name\` prop and returns a greeting. Simple, clean, and reusable.

## Key Concepts

### Components

Components are the building blocks of React applications. You can think of them as custom HTML elements that encapsulate logic and presentation.

### Props

Props allow you to pass data from parent components to child components, making your code modular and flexible.

### State

State allows components to create and manage their own data. When state changes, React automatically re-renders the component.

## Next Steps

Once you understand these core concepts, you can explore:

1. React Hooks for managing state and side effects
2. React Router for navigation
3. State management libraries like Redux or Zustand
4. Build tools like Vite for fast development

Happy coding!`,

  'building-better-apis': `---
title: "Building Better APIs: Lessons Learned"
date: "2025-10-28"
author: "Charles Amaya"
tags: ["APIs", "Backend", "Best Practices"]
excerpt: "Key principles for designing robust and developer-friendly APIs"
---

# Building Better APIs: Lessons Learned

After building and consuming dozens of APIs, I've learned that good API design is about more than just making endpoints work. It's about creating an intuitive, consistent experience for developers.

## Consistency is King

The most important principle in API design is consistency. When developers can predict how your API behaves, they can work faster and make fewer mistakes.

### Naming Conventions

Stick to a clear naming pattern:

- Use plural nouns for collections: \`/users\`, \`/posts\`
- Use HTTP methods correctly: GET for reads, POST for creates, PUT/PATCH for updates
- Keep URLs lowercase with hyphens: \`/user-profiles\` not \`/UserProfiles\`

## Error Handling

Good error messages can save hours of debugging. Always include:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "field": "email"
  }
}
\`\`\`

Make errors actionable. Tell developers not just what went wrong, but how to fix it.

## Versioning

Your API will change. Plan for it from day one:

- Include version in the URL: \`/v1/users\`
- Support old versions as long as possible
- Clearly communicate deprecation timelines

## Documentation

Documentation isn't optional. Use tools like:

- OpenAPI/Swagger for interactive docs
- Postman collections for testing
- Clear examples for every endpoint

## Performance Matters

A few simple optimizations can dramatically improve API performance:

1. **Pagination**: Never return unbounded lists
2. **Caching**: Use ETags and cache headers
3. **Compression**: Enable gzip
4. **Field filtering**: Let clients request only needed fields

## Security First

Security should be built in, not bolted on:

- Always use HTTPS
- Implement rate limiting
- Validate all inputs
- Use proper authentication (OAuth 2.0, JWT)
- Follow principle of least privilege

## Wrapping Up

Building great APIs is an iterative process. Start with these fundamentals, listen to your users, and continuously improve. Your future self (and your API consumers) will thank you.`,

  'thoughts-on-minimal-design': `---
title: "Thoughts on Minimal Design"
date: "2025-11-04"
author: "Charles Amaya"
tags: ["Design", "UX", "Philosophy"]
excerpt: "Why less is often more when it comes to user interface design"
---

# Thoughts on Minimal Design

In a world of infinite scroll, auto-playing videos, and notification badges, minimal design feels like a breath of fresh air. But minimalism isn't just about aesthetics—it's about respect.

## Respecting Attention

Every element on a page demands attention. Colors shout. Animations dance. Buttons beg to be clicked. Minimal design asks a simple question: *Is this worth the user's attention?*

When you remove the unnecessary, what remains becomes more powerful.

## The Medium Example

Medium understood this early on. Their reading experience is remarkably simple:

- Clean typography
- Generous whitespace
- No sidebars competing for attention
- Content is the star

This isn't because they couldn't build something more complex. It's because they chose not to.

## Constraints Breed Creativity

Working within constraints forces better decisions. When you can't rely on:

- Flashy animations to hide poor UX
- A thousand features to satisfy every use case
- Visual complexity to appear "professional"

You have to focus on what actually matters: the core experience.

## Minimal ≠ Simple

Minimal design doesn't mean simplistic or easy. It takes significant effort to:

1. **Understand** what users really need
2. **Remove** everything that isn't essential
3. **Refine** what remains until it's effortless

As Antoine de Saint-Exupéry wrote: *"Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."*

## Practical Tips

If you're pursuing minimal design:

- Start by removing, not adding
- Use whitespace intentionally
- Limit your color palette (2-3 colors max)
- Choose typography carefully
- Let content breathe
- Question every element: "What happens if I remove this?"

## Finding Balance

Minimal design isn't right for every context. A dashboard showing real-time metrics needs information density. A creative portfolio might benefit from bold visuals.

The key is intentionality. Every design choice should serve the user's goals, not the designer's ego.

## Conclusion

Minimal design is a philosophy of subtraction in a culture of addition. It's harder to build but easier to use. It's less impressive to look at but more pleasant to live with.

In the end, the best design is the one users don't notice—because they're too busy accomplishing what they came to do.`
}
