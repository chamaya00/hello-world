# How to Add a New Blog Post

## Super Simple 3-Step Process

### Step 1: Copy the Template
1. Go to `src/posts/POST_TEMPLATE.md`
2. Copy the entire file
3. Create a new file in `src/posts/` with a descriptive name
   - Example: `my-awesome-post.md` or `learning-typescript.md`
   - Use lowercase and hyphens, no spaces

### Step 2: Fill in Your Content
Open your new file and update:

```markdown
---
title: "Your Actual Post Title"
date: "2025-11-06"  ← Today's date (YYYY-MM-DD)
author: "Charles Amaya"
tags: ["React", "JavaScript", "Tutorial"]  ← Relevant topics
excerpt: "One sentence that summarizes your post"
---

# Your Actual Post Title

Your content goes here!
```

**That's it for the frontmatter!** Now paste your actual post content below.

### Step 3: Save and Deploy
- Save the file
- Push to GitHub
- Done! Your post will automatically appear on the site

## No Code Changes Needed!

The site automatically finds all `.md` files in `src/posts/`. You don't need to:
- ❌ Edit any JavaScript files
- ❌ Update any imports
- ❌ Configure anything

Just add a new `.md` file and it works!

---

## Formatting Your Content

You can paste content from anywhere and add simple formatting:

### Headings
```markdown
# Big Heading
## Medium Heading
### Small Heading
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
`Code snippet`
```

### Lists
```markdown
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

### Links
```markdown
[Link text](https://example.com)
```

### Code Blocks
````markdown
```javascript
function hello() {
  console.log("Hello!")
}
```
````

### Images
```markdown
![Alt text](https://example.com/image.jpg)
```

### Quotes
```markdown
> This is a quoted text
```

---

## Tips

### Getting Content from Other Sources

**From Word/Google Docs:**
- Copy and paste
- Clean up any weird formatting
- Add markdown formatting manually

**From Websites:**
- Copy the text
- Add headings with `##`
- Add bold with `**text**`

**From Plain Text:**
- Just paste it!
- Add `## Heading` where you want headings
- Format as needed

### Common Frontmatter Values

**Date Format:**
- Must be `YYYY-MM-DD`
- Example: `2025-11-06`

**Tags:**
- Put in quotes: `["React", "JavaScript"]`
- Use commas to separate
- Will show up on your post

**Excerpt:**
- One sentence summary
- Shows in post lists
- Keep it short and descriptive

---

## Example: Adding a Post About TypeScript

1. **Create file:** `src/posts/why-i-love-typescript.md`

2. **Add frontmatter and content:**
```markdown
---
title: "Why I Love TypeScript"
date: "2025-11-06"
author: "Charles Amaya"
tags: ["TypeScript", "JavaScript", "Programming"]
excerpt: "TypeScript has changed how I write JavaScript, and here's why"
---

# Why I Love TypeScript

I've been using TypeScript for 6 months now, and it's completely changed my development workflow.

## What is TypeScript?

TypeScript is JavaScript with syntax for types. It helps catch errors before you even run your code.

## Why I Love It

**Better autocomplete** - My editor knows exactly what properties exist on my objects.

**Catch bugs early** - Typos and wrong types are caught immediately.

**Easier refactoring** - When I rename something, TypeScript updates all references.

## Getting Started

If you're new to TypeScript, here's what I recommend:

1. Install it: `npm install -D typescript`
2. Try it on one small file
3. Gradually add it to more files

That's it! You don't need to convert everything at once.

## Conclusion

TypeScript takes a bit of learning, but it's worth it. Give it a try!
```

3. **Save and deploy!**

That's the whole process! 🎉

---

## Troubleshooting

**Post not showing up?**
- Check that your file is in `src/posts/`
- Check that it ends with `.md`
- Check that the frontmatter is valid (between `---` lines)
- Look at the debug panel (🐛 button) for errors

**Formatting looks weird?**
- Make sure you're using markdown syntax
- Check the POST_TEMPLATE.md for examples
- Compare with existing posts

**Need help?**
- Look at existing posts in `src/posts/` for examples
- Copy their format
- Modify the content

---

**That's it! Adding posts is now as simple as copying a template and filling it in!** 🚀
