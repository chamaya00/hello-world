---
title: "Your Project Name"
tech: ["React", "TypeScript", "Node.js", "PostgreSQL"]
description: "A short description of your project (1-2 sentences). What does it do? What problem does it solve?"
liveUrl: "https://yourproject.com"
githubUrl: "https://github.com/yourusername/yourproject"
featured: true
order: 1
---

# Your Project Name

## Overview

Write a detailed description of your project here. What does it do? Why did you build it?

## Key Features

- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## Technologies Used

- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Deployment:** Vercel

## Challenges & Solutions

### Challenge 1
Describe a challenge you faced and how you solved it.

### Challenge 2
Another challenge and solution.

## What I Learned

Talk about what you learned building this project.

## Future Improvements

- [ ] Feature to add in the future
- [ ] Another improvement idea
- [ ] Something else to enhance

## Links

- [Live Demo](https://yourproject.com)
- [GitHub Repository](https://github.com/yourusername/yourproject)
- [Case Study](https://yourblog.com/case-study) (optional)

---

## Instructions for Adding a New Project:

1. **Copy this template file** to create your new project
2. **Rename the file** to something like `my-awesome-project.md`
3. **Update the frontmatter** (between the --- lines):
   - **title:** Your project name
   - **tech:** Array of technologies used (in quotes, comma-separated)
   - **description:** Short 1-2 sentence summary (shows on project card)
   - **liveUrl:** Link to live project (or "#" if not deployed)
   - **githubUrl:** Link to GitHub repo (or "#" if private)
   - **featured:** true/false (featured projects show first)
   - **order:** Number for sorting (1 = first, 2 = second, etc.)
4. **Replace the content** with your actual project details
5. **Save** - that's it! The project will automatically appear!

## Frontmatter Fields Explained:

### Required Fields:
- `title` - Project name (shows as heading)
- `tech` - Technologies array: `["React", "Node.js", "PostgreSQL"]`
- `description` - Short summary for project card

### Optional Fields:
- `liveUrl` - Live demo link (use "#" if none)
- `githubUrl` - GitHub repo link (use "#" if none)
- `featured` - Set to `true` to highlight this project
- `order` - Number for custom sorting (lower = higher in list)

## Tips:

### Tech Stack
List the main technologies, not everything:
```
tech: ["React", "TypeScript", "Node.js", "PostgreSQL"]
```

### Description
Keep it short and impactful:
✅ Good: "A real-time chat app with end-to-end encryption for secure messaging"
❌ Too long: "This is a chat application that I built using React and it has many features..."

### URLs
- Use full URLs: `https://myproject.com`
- Use "#" if you don't have a link yet
- Both fields are optional, leave out if not needed

### Order & Featured
- `order: 1` shows first, `order: 2` shows second, etc.
- `featured: true` can add special styling (if implemented)
- If no order is specified, projects sort alphabetically

That's all you need! 🚀
