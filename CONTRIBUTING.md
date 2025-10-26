# Contributing to MPC Demo Repository

Welcome! This demo repository is specifically designed for **learning Git, GitHub, and web development**. 🇲🇷💻

---

## 📚 First Time Here?

1. **Read the main [MPC Contributing Guide](https://github.com/Mauritania-Programmers-Community/.github/blob/main/CONTRIBUTING.md)** for general guidelines
2. Follow the simple steps below for this specific project

---

## ✅ Prerequisites

Before you start, make sure you have:

### Git Installed

**Check if you have Git:**

```bash
git --version
```

If you see a version number (like `git version 2.x.x`), you're good to go! ✅

If not, install Git:

- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win)
- **Mac**:
  - Install via Homebrew: `brew install git`
  - Or download from [git-scm.com](https://git-scm.com/download/mac)
- **Linux**:
  - Ubuntu/Debian: `sudo apt-get install git`
  - Fedora: `sudo dnf install git`

### GitHub Account

- Create a free account at [github.com](https://github.com/signup) if you don't have one

### Code Editor (Recommended)

- [VS Code](https://code.visualstudio.com/) - Free and beginner-friendly
- Or any text editor you prefer

---

## 🛠️ Optional Developer Tools

**These are OPTIONAL!** The project works perfectly without them.

### Without Developer Tools (Default)

```bash
# Just open index.html in your browser
# Works immediately - no setup required!
```

### With Developer Tools (Better DX)

**Install Node.js** (one-time setup):

- Download from [nodejs.org](https://nodejs.org/) (LTS version recommended)
- Check installation: `node --version` and `npm --version`

**Available Scripts**:

```bash
npm start            # Start live server with auto-reload
npm run lint         # Check formatting + JavaScript errors
npm run lint:format  # Check code formatting only (Prettier)
npm run lint:js      # Check JavaScript errors only (ESLint)
npm run format       # Auto-format all code with Prettier
```

**What each tool checks:**

- **Prettier** (formatting): Indentation, spacing, quotes, line length
- **ESLint** (quality): Syntax errors, unused variables, undefined variables

**VS Code Users** (Optional):

Recommended extensions for better developer experience:

- **Prettier** - Auto-format on save
- **Tailwind CSS IntelliSense** - CSS class autocomplete
- **Live Server** - Auto-reload browser on save

Install via VS Code Extensions marketplace, then configure auto-format:

```json
// .vscode/settings.json (create this file locally)
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

**Workflow Improvement**:

```
Before: Edit → Save → Switch to browser → Refresh → See result
After:  Edit → Save → Auto-formatted + Auto-reloaded! ✨
```

---

## 🚀 Complete Workflow (Step-by-Step)

### Step 1: Fork the Repository

1. Click the **"Fork"** button at the top right of this page
2. This creates your own copy of the repository

### Step 2: Clone Your Fork

```bash
# Clone your fork (not the original repository)
git clone https://github.com/YOUR-USERNAME/demo-repository.git
cd demo-repository
```

### Step 3: Create a New Branch

**IMPORTANT**: Always create a new branch for your changes!

```bash
# Create and switch to a new branch
git checkout -b your-feature-name

# Examples of good branch names:
git checkout -b fix/typo-in-hero
git checkout -b feature/add-testimonials
git checkout -b docs/update-readme
```

### Step 4: Make Your Changes

- Open the files in your editor
- Make your changes
- Save the files

### Step 5: Test Your Changes

```bash
# Open index.html in browser
# - Double-click index.html, OR
# - Use VS Code Live Server

# Check:
# - Does it look correct?
# - Is it responsive on mobile?
# - Any console errors? (F12)

# OPTIONAL: Run quality checks locally
npm run lint         # Check formatting + JavaScript errors
npm run format       # Auto-format code
```

### Step 6: Stage and Commit

```bash
# See what files changed
git status

# Add your changes to staging
git add .
# Or add specific files:
git add index.html
git add css/custom.css

# Commit with a clear message
git commit -m "type: brief description"

# Examples:
git commit -m "fix: correct typo in hero section"
git commit -m "feat: add testimonials section"
git commit -m "docs: update contributing guide"
```

### Step 7: Push to Your Fork

```bash
# Push your branch to your fork
git push origin your-feature-name

# Example:
git push origin fix/typo-in-hero
```

### Step 8: Create Pull Request

1. Go to **your fork** on GitHub
2. You'll see a yellow banner: **"Compare & pull request"** - Click it
3. Fill out the PR template:
   - Add a clear title
   - Describe what you changed and why
   - Add screenshots if you changed the UI
   - Complete the checklist
4. Click **"Create pull request"**

### Step 9: Respond to Review

- A maintainer will review your PR
- They may request changes
- Make changes in the same branch
- Push again - the PR updates automatically

```bash
# Make requested changes
# Then:
git add .
git commit -m "fix: address review comments"
git push origin your-feature-name
```

### Step 10: Celebrate! 🎉

Once approved, your PR will be merged. You're now a contributor!

---

## 📝 Commit Message Convention

We use **conventional commits** to keep our history clean and consistent.

### Format

```
<type>: <brief description>
```

### Types

| Type         | Use When                          | Example                              |
| ------------ | --------------------------------- | ------------------------------------ |
| **feat**     | Adding new feature                | `feat: add mobile menu`              |
| **fix**      | Fixing a bug                      | `fix: correct footer spacing`        |
| **docs**     | Documentation only                | `docs: update readme`                |
| **style**    | Code formatting (no logic change) | `style: format with prettier`        |
| **refactor** | Code cleanup (no feature change)  | `refactor: simplify navigation code` |
| **test**     | Adding tests                      | `test: add navigation tests`         |
| **chore**    | Maintenance tasks                 | `chore: update dependencies`         |

### Examples

✅ **Good commit messages:**

```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve mobile menu not closing"
git commit -m "docs: add setup instructions"
git commit -m "style: improve button hover effects"
```

❌ **Bad commit messages:**

```bash
git commit -m "updates"
git commit -m "fix stuff"
git commit -m "changes"
git commit -m "final version"
```

### Rules

- Start with lowercase
- No period at the end
- Keep it under 50 characters
- Be specific about what changed

---

## 📝 Demo-Specific Guidelines

### Use Tailwind CSS

Prefer Tailwind utility classes over custom CSS:

```html
✅
<div class="bg-primary-500 text-white px-6 py-3 rounded-lg">
  ❌
  <div class="my-custom-button"></div>
</div>
```

### Brand Colors

Always use MPC brand colors:

- `bg-primary-500` - MPC Green (#00A859)
- `bg-golden-500` - MPC Gold (#FFD700)

### Testing Checklist

Before submitting your PR:

- [ ] Tested in browser - no errors
- [ ] Tested on mobile (375px width)
- [ ] No console errors (F12)

---

## 🎯 Good First Issues

Look for issues labeled:

- `good first issue` - Perfect for beginners
- `beginner-friendly` - Simple tasks
- `documentation` - No coding required

---

## 💡 What to Contribute

### Easy (30 mins)

- Fix typos
- Update text content
- Add alt text to images
- Update documentation

### Medium (1-2 hours)

- Add new sections
- Style improvements
- Create cards/components
- Add icons

### Advanced (2+ hours)

- JavaScript features
- Accessibility fixes
- Performance optimizations

---

## 🐛 Found a Bug?

1. [Open an issue](../../issues/new?template=bug_report.md)
2. Use the bug report template
3. Include screenshots
4. Describe steps to reproduce

---

## 💬 Need Help?

- **WhatsApp**: [Join 600+ members](https://chat.whatsapp.com/L13JBkYOBXqK9p8FYZE00x)
- **Discussions**: [Ask questions](../../discussions)
- **Issues**: [Get help](../../issues/new?template=beginner_help.md)

---

## 📁 Project Structure

```
demo-repository/
├── index.html              # Main page (edit this!)
├── css/custom.css          # Custom styles
├── js/app.js               # JavaScript features
├── assets/images/          # Images and logo
└── docs/                   # Documentation
```

---

## ✅ Before Submitting PR

- Code works correctly
- Tested on desktop and mobile
- No console errors
- Follows existing code style

---

**That's it!** Don't overthink it - just make your change, test it, and submit. We're here to help you learn! 🇲🇷💻

For detailed guidelines, see the main [MPC Contributing Guide](https://github.com/Mauritania-Programmers-Community/.github/blob/main/CONTRIBUTING.md).
