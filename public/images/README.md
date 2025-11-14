# Images Folder

Store all blog post and website images here.

## How to Use Images in Posts

1. **Place your image** in this folder (e.g., `screenshot.png`)
2. **Reference in markdown** using: `![Alt text](/images/screenshot.png)`

Example:
```markdown
![Claude Code interface](/images/claude-code-interface.png)
```

## Image Optimization Tips

### Before Uploading

**Compress your images** to reduce file size and improve load times:

- **Online Tools (Recommended)**:
  - [TinyPNG](https://tinypng.com/) - PNG and JPG compression
  - [Squoosh](https://squoosh.app/) - All formats, advanced controls
  - [ImageOptim](https://imageoptim.com/) - Mac app

- **Target Sizes**:
  - Screenshots: < 200KB
  - Photos: < 300KB
  - Hero images: < 500KB

### Format Recommendations

- **Screenshots**: PNG (for sharp text) or WebP
- **Photos**: JPG or WebP
- **Graphics/Logos**: SVG (scalable) or PNG
- **Animations**: GIF or MP4 (smaller)

### Responsive Images

For very large images, consider:
- Max width: 1200px (wider than blog content)
- Height: Automatic (maintain aspect ratio)

### File Naming

Use descriptive, lowercase names with hyphens:
- ✅ `claude-code-interface.png`
- ✅ `website-before-after.jpg`
- ❌ `Screenshot 2025.png`
- ❌ `IMG_1234.jpg`

## Optimization Checklist

Before adding an image to a post:

- [ ] Compressed to reduce file size
- [ ] Reasonable dimensions (not 4K for web)
- [ ] Descriptive filename
- [ ] Alt text in markdown (accessibility + SEO)

## Example Usage in Posts

```markdown
# My Post Title

Here's a screenshot of the interface:

![The Claude Code mobile interface showing the project browser](/images/claude-code-mobile.png)

And here's a comparison:

![Before and after redesign comparison](/images/redesign-comparison.jpg)
```

---

**Pro Tip**: Your markdown renderer (`react-markdown`) automatically handles images - no additional setup needed!
