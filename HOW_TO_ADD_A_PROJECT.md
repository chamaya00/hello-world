# How to Add a New Project

## Super Simple 3-Step Process

### Step 1: Copy the Template
1. Go to `src/projects/PROJECT_TEMPLATE.md`
2. Copy the entire file
3. Create a new file in `src/projects/` with a descriptive name
   - Example: `my-awesome-app.md` or `chat-application.md`
   - Use lowercase and hyphens, no spaces

### Step 2: Fill in Your Project Info
Open your new file and update:

```markdown
---
title: "Your Actual Project Name"
tech: ["React", "Node.js", "MongoDB"]  ← Technologies you used
description: "Short 1-2 sentence description of what it does"
liveUrl: "https://yourproject.com"  ← Link to live demo (or "#")
githubUrl: "https://github.com/you/project"  ← Link to repo (or "#")
featured: true  ← true = highlight this project, false = normal
order: 1  ← Lower numbers show first (1, 2, 3...)
---

# Your Actual Project Name

Write about your project here!
```

### Step 3: Save and Deploy
- Save the file
- Push to GitHub
- Done! Your project will automatically appear on the site

## No Code Changes Needed!

The site automatically finds all `.md` files in `src/projects/`. You don't need to:
- ❌ Edit any JavaScript files
- ❌ Update any imports
- ❌ Configure anything

Just add a new `.md` file and it works!

---

## Frontmatter Fields Explained

### Required Fields

**title** - Your project name
```yaml
title: "TaskFlow - Task Manager"
```

**tech** - Array of technologies (in quotes, comma-separated)
```yaml
tech: ["React", "TypeScript", "Node.js", "PostgreSQL"]
```

**description** - Short summary (shows on project card)
```yaml
description: "A minimalist task manager focused on simplicity and speed"
```

### Optional Fields

**liveUrl** - Link to live demo
```yaml
liveUrl: "https://taskflow.app"
# Or if not deployed yet:
liveUrl: "#"
```

**githubUrl** - Link to GitHub repository
```yaml
githubUrl: "https://github.com/username/taskflow"
# Or if private/not available:
githubUrl: "#"
```

**featured** - Highlight this project (true/false)
```yaml
featured: true   # Makes it stand out
featured: false  # Regular display
```

**order** - Sort order (lower = shows first)
```yaml
order: 1  # Shows first
order: 2  # Shows second
order: 3  # Shows third
# No order specified = shows last, alphabetically
```

---

## Writing Great Project Descriptions

### The Short Description (frontmatter)

This shows on the project card. Keep it 1-2 sentences, focus on **what** it does and **why** it's useful.

**✅ Good:**
```
"A real-time chat app with end-to-end encryption for secure team communication"
```

**❌ Too vague:**
```
"A chat application I built"
```

**❌ Too long:**
```
"This is a chat application that I built using React and Node.js. It has many features including..."
```

### The Full Description (markdown content)

Use the template sections to tell the full story:

1. **Overview** - What is it? Why did you build it?
2. **Key Features** - Bullet points of main features
3. **Technologies Used** - Explain your tech stack choices
4. **Challenges & Solutions** - Show problem-solving skills
5. **What I Learned** - Demonstrate growth
6. **Future Improvements** - Show you're thinking ahead

---

## Tech Stack Tips

### Keep It Focused

List the **main** technologies, not every tiny library:

**✅ Good:**
```yaml
tech: ["React", "TypeScript", "Node.js", "PostgreSQL"]
```

**❌ Too much:**
```yaml
tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Jest", "ESLint", "Prettier", "Webpack", "Babel"]
```

### Common Tech Examples

**Frontend:**
```yaml
tech: ["React", "TypeScript", "Tailwind CSS"]
tech: ["Vue.js", "JavaScript", "Vuetify"]
tech: ["Next.js", "React", "CSS Modules"]
```

**Full Stack:**
```yaml
tech: ["React", "Node.js", "MongoDB", "Express"]
tech: ["Vue.js", "Python", "FastAPI", "PostgreSQL"]
tech: ["Next.js", "Prisma", "PostgreSQL"]
```

**Backend:**
```yaml
tech: ["Python", "Django", "PostgreSQL", "Redis"]
tech: ["Node.js", "Express", "MongoDB"]
tech: ["Go", "PostgreSQL", "Docker"]
```

---

## Sorting Your Projects

Projects are sorted by the `order` field (lowest first), then alphabetically by title.

**Example:**
```
order: 1  → Shows FIRST
order: 2  → Shows SECOND
order: 3  → Shows THIRD
(no order) → Shows LAST (alphabetically)
```

**Strategy:**
- Give your best/featured projects low numbers (1, 2, 3)
- Leave older/smaller projects without an order
- You can reorder anytime by changing the numbers

---

## Complete Example

Here's a complete example for a weather app:

**File:** `src/projects/weather-dashboard.md`

```markdown
---
title: "Weather Dashboard"
tech: ["React", "TypeScript", "OpenWeather API"]
description: "A beautiful weather dashboard with forecasts, radar maps, and severe weather alerts"
liveUrl: "https://weather.yourdomain.com"
githubUrl: "https://github.com/yourusername/weather-dashboard"
featured: true
order: 2
---

# Weather Dashboard

## Overview

A clean, modern weather dashboard that provides accurate forecasts, interactive radar maps, and real-time severe weather alerts. Built to be fast, responsive, and easy to use on any device.

## Key Features

- **7-Day Forecast:** Detailed weather predictions with hourly breakdowns
- **Interactive Radar:** Live radar maps with precipitation tracking
- **Severe Weather Alerts:** Instant notifications for your area
- **Location Detection:** Automatically finds your location
- **Mobile Responsive:** Works great on phones and tablets

## Technologies Used

- **Frontend:** React with TypeScript for type safety
- **API:** OpenWeather API for weather data
- **Maps:** Mapbox for interactive radar visualization
- **Styling:** Tailwind CSS for responsive design
- **Deployment:** Vercel for fast, global CDN hosting

## Challenges & Solutions

### Challenge: Real-time Data Updates
Weather data needed to update automatically without user interaction.

**Solution:** Implemented polling with exponential backoff and service workers for background updates.

### Challenge: Handling API Rate Limits
The free tier of OpenWeather API has strict rate limits.

**Solution:** Added intelligent caching with stale-while-revalidate strategy, reducing API calls by 80%.

## What I Learned

- Working with external APIs and handling rate limits
- Implementing effective caching strategies
- Building responsive data visualizations
- Progressive Web App (PWA) best practices

## Future Improvements

- [ ] Historical weather data graphs
- [ ] Multiple location support
- [ ] Weather-based activity recommendations
- [ ] Air quality index integration
- [ ] Share weather cards on social media

## Links

- [Live Demo](https://weather.yourdomain.com)
- [GitHub Repository](https://github.com/yourusername/weather-dashboard)
```

---

## Tips for Success

### 1. Show, Don't Just Tell

Instead of:
> "This app has many features"

Write:
> "Real-time collaboration, offline support, and keyboard shortcuts for power users"

### 2. Explain Your Choices

Instead of:
> "Built with React and PostgreSQL"

Write:
> "Built with React for the interactive UI and PostgreSQL for reliable data consistency"

### 3. Highlight Problem-Solving

Employers love to see how you solve problems:
```markdown
### Challenge: Slow Initial Load
The app took 8 seconds to load on 3G connections.

**Solution:** Implemented code splitting and lazy loading,
reducing initial bundle by 60% and load time to under 2 seconds.
```

### 4. Be Specific About Impact

Instead of:
> "Improved performance"

Write:
> "Reduced API response time from 800ms to 120ms by adding Redis caching"

---

## Troubleshooting

**Project not showing up?**
- Check that your file is in `src/projects/`
- Check that it ends with `.md`
- Check that the frontmatter is valid (between `---` lines)
- Look at the debug panel (🐛 button) for errors
- Compare your file with `taskflow.md` or `devdocs.md`

**Links not working?**
- Make sure URLs start with `https://`
- Use `"#"` if you don't have a link yet
- Check for typos in the URL

**Tech tags not showing?**
- Ensure tags are in an array: `["React", "Node.js"]`
- Each tag should be in quotes
- Separate tags with commas

**Project order is wrong?**
- Check the `order` field (lower = higher in list)
- Make sure it's a number, not a string: `order: 1` not `order: "1"`

---

## Quick Reference

**Minimal project file:**
```markdown
---
title: "My Project"
tech: ["JavaScript", "HTML", "CSS"]
description: "A simple project that does something cool"
---

# My Project

Here's what my project does...
```

**Full project file:**
```markdown
---
title: "My Amazing Project"
tech: ["React", "Node.js", "MongoDB"]
description: "Short description here"
liveUrl: "https://myproject.com"
githubUrl: "https://github.com/me/project"
featured: true
order: 1
---

# My Amazing Project

(Full markdown content with Overview, Features, etc.)
```

---

**That's it! Adding projects is now as simple as copying a template and filling it in!** 🚀

Look at the existing projects (`taskflow.md`, `devdocs.md`) for more inspiration!
