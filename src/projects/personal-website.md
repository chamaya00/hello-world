---
title: "Personal Website Built with Claude Code"
tech: ["React", "Vite", "JavaScript", "Markdown", "CSS", "Vercel"]
description: "A modern personal website with blog and portfolio, featuring custom markdown processing, mobile debugging tools, and an intuitive content management system."
liveUrl: "https://hello-world-two-sandy.vercel.app"
githubUrl: "https://github.com/chamaya00/hello-world"
featured: true
order: 1
---

# Personal Website Built with Claude Code

## Overview

My personal website built from the ground up with React, serving as a portfolio and blog platform. The project showcases modern web development practices, custom content management, and innovative debugging solutions for mobile development.

## Key Features

- **Dynamic Blog System:** Markdown-based blog posts with automatic discovery - just drop a file in the folder
- **Project Portfolio:** Showcase projects with detailed descriptions, tech stacks, and links
- **Mobile Debug Panel:** On-screen debugging console for testing on mobile devices without dev tools
- **Browser-Compatible Markdown Parser:** Custom frontmatter parser that works natively in browsers without Node.js dependencies
- **Automatic Content Discovery:** No code changes needed to add posts or projects
- **Responsive Design:** Clean, minimalist interface that works on all devices
- **Fast Performance:** Optimized bundle size and efficient loading

## Technologies Used

- **Frontend Framework:** React for component-based UI architecture
- **Build Tool:** Vite for lightning-fast development and optimized production builds
- **Content Format:** Markdown with YAML frontmatter for blog posts and projects
- **Styling:** Modern CSS with responsive design patterns
- **Routing:** React Router for client-side navigation
- **Markdown Rendering:** ReactMarkdown for safe content display
- **Deployment:** Vercel for continuous deployment and global CDN hosting

## Development Journey & Challenges

### Challenge 1: Buffer Error in Browser
**Problem:** The gray-matter library used Node.js APIs (like `Buffer`) that don't exist in browsers, causing a "Can't find variable: Buffer" error that prevented posts from loading.

**Solution:** Replaced gray-matter with a custom browser-compatible frontmatter parser that parses YAML syntax natively in JavaScript. This reduced bundle size by 82KB and eliminated the dependency issue entirely.

### Challenge 2: Mobile Debugging
**Problem:** Debugging on mobile devices was difficult - couldn't easily access browser console to see errors and logs.

**Solution:** Built a custom on-screen debug panel with:
- Floating bug button (🐛) that toggles the panel
- Real-time console log interception and display
- One-tap copy functionality for easy error sharing
- Larger error messages optimized for mobile readability
- Mobile-responsive design taking up to 75% of screen height

### Challenge 3: Complex Content Management
**Problem:** Adding new blog posts or projects required editing JavaScript files, adding imports, and updating code - not user-friendly.

**Solution:** Implemented automatic content discovery using Vite's `import.meta.glob()`:
- Just drop a `.md` file in `src/posts/` or `src/projects/`
- Template files guide content creation
- No code changes needed - fully automated
- Comprehensive guides (HOW_TO_ADD_A_POST.md, HOW_TO_ADD_A_PROJECT.md)

### Challenge 4: Merge Conflicts
**Problem:** Multiple feature branches with different approaches to solving the same problem created complex merge conflicts.

**Solution:** Carefully merged both approaches, keeping the best of each:
- Markdown file system from one branch
- Comprehensive debugging from another
- Combined into a unified, well-documented solution

## What I Learned

- **Browser vs Node.js Compatibility:** Understanding which APIs work where and how to write cross-platform JavaScript
- **Custom Parsing:** Building a lightweight YAML parser from scratch
- **Mobile Development:** Creating effective debugging tools for mobile web development
- **Content Management Systems:** Designing intuitive, code-free content workflows
- **Performance Optimization:** Reducing bundle sizes and optimizing load times
- **Git Workflow:** Managing complex merges and maintaining clean commit history
- **Pair Programming with AI:** Effective collaboration with Claude Code for problem-solving and implementation

## Technical Highlights

### Custom Frontmatter Parser
Created a browser-native parser that handles:
- YAML-style key-value pairs
- Quoted strings
- Arrays with brackets `["tag1", "tag2"]`
- Boolean values (true/false)
- Numeric values
- Nested markdown content extraction

### Automatic Discovery System
Using Vite's glob imports for zero-config content management:
```javascript
const modules = import.meta.glob('../posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
})
```

### Debug Panel Architecture
Intercepts console methods at runtime to capture all logs:
- Maintains separate error and log arrays
- Provides copy-to-clipboard functionality
- Responsive design with collapsible interface
- Automatic filtering of template files

## Future Improvements

- [ ] Dark mode toggle
- [ ] Blog post search functionality
- [ ] Tag-based filtering for posts
- [ ] RSS feed for blog subscribers
- [ ] Analytics dashboard
- [ ] Comments system for blog posts
- [ ] Social media share buttons
- [ ] Print-friendly post layouts

## Development Stats

- **Initial Bundle:** 453KB → **Optimized:** 371KB (18% reduction)
- **Gzipped Size:** 138KB → 117KB (15% reduction)
- **Build Time:** ~2 seconds
- **Performance Score:** Optimized for Vercel's edge network
- **Lines of Code:** 800+ lines of custom code
- **Debugging Sessions:** Multiple iterations to perfect the solution

## What Makes This Project Special

This website represents not just the final product, but a learning journey of problem-solving, debugging, and optimization. Every feature was built with intention:

- The debug panel solves a real problem (mobile debugging)
- The content system prioritizes ease of use over technical complexity
- The custom parser eliminates unnecessary dependencies
- The architecture supports growth and new features

It's a testament to iterative development, thoughtful debugging, and building tools that solve real problems.

## Links

- [Live Website](https://hello-world-two-sandy.vercel.app)
- [GitHub Repository](https://github.com/chamaya00/hello-world)
