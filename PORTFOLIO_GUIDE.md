# Portfolio Website - Complete Architecture Guide

## Overview

This is a modern, responsive portfolio website built with React and Vite. It showcases design and development projects with an emphasis on smooth animations, dark mode support, and excellent user experience across all devices.

**Tech Stack:**
- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + CSS3
- **Animations:** Framer Motion
- **Routing:** React Router DOM v7
- **Icons:** Lucide React
- **Particles:** tsparticles

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Atomic UI components
│   ├── project/        # Project-specific components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact section
│   ├── Footer.jsx      # Footer with links
│   ├── Hero.jsx        # Hero section with particles
│   ├── Navbar.jsx      # Navigation bar with dark mode
│   ├── ProjectCard.jsx # Individual project card
│   ├── ProjectFilter.jsx # Project filtering
│   ├── Skills.jsx      # Skills section
│   └── SkillBadge.jsx  # Individual skill badge
│
├── contexts/           # React Context for state management
│   ├── ThemeContext.jsx     # Dark mode theme provider
│   └── useTheme.js         # Custom hook for theme
│
├── data/              # Static data files
│   ├── projects.js    # All project data
│   └── skills.js      # All skill data
│
├── pages/             # Page components for routing
│   ├── HomePage.jsx   # Landing page with all sections
│   └── ProjectsPage.jsx # Dedicated projects showcase
│
├── constants/         # Configuration files
│   └── animations.js  # Reusable animation configs
│
├── App.jsx            # Main app component with routing
├── main.jsx           # Entry point
└── index.css          # Global styles and Tailwind

public/
└── vite.svg

Config Files:
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
├── package.json       # Dependencies and scripts
└── index.html         # HTML entry point
```

---

## Key Architectural Decisions

### 1. **React Context for Theme Management**
**Why:** Instead of using prop drilling or Redux, Context API provides a lightweight solution for global dark mode state. The theme preference is persisted to localStorage and respects system preferences.

**Implementation:**
- ThemeContext provides `darkMode` state and `setDarkMode` function
- Custom hook `useTheme()` allows components to access theme easily
- System preference detection via `matchMedia` API
- Automatic class toggling on `document.documentElement`

### 2. **Tailwind CSS for Styling**
**Why:** Utility-first approach enables rapid development with consistent spacing and colors. Dark mode is natively supported through CSS class toggling.

**Key Features:**
- Container-based responsive design
- Custom font (Sora) configured in theme
- 8px spacing system via Tailwind defaults
- Dark mode via `dark:` prefix on all elements
- Smooth transitions with `transition-colors` and `duration-200`

### 3. **Framer Motion for Animations**
**Why:** Provides declarative, performant animations with spring physics and gesture support. Animations enhance UX without harming accessibility.

**Common Patterns:**
- `initial` and `animate` props for entrance animations
- `whileHover` and `whileTap` for interactive feedback
- Spring-based transitions for natural movement
- Staggered animations for sequential element reveals

### 4. **Static Data Files for Projects & Skills**
**Why:** Separates content from logic, making updates easy without touching components. Enables future integration with a headless CMS or database.

**Structure:** Each project object contains:
- `id` - unique identifier for routing
- `title`, `description`, `image` - display content
- `tags` - skill labels for filtering
- `type` - either 'design' or 'development' for filtering
- `prototype`/`demo`/`github`/`caseStudyUrl` - external links

### 5. **Component Composition Strategy**
**Why:** Single Responsibility Principle makes testing and reusability easier. Components are organized by their purpose.

**Hierarchy:**
- **Pages** - Full page layouts (`HomePage`, `ProjectsPage`)
- **Sections** - Large feature areas (`Hero`, `About`, `Skills`, `Contact`)
- **Components** - Reusable functional units (`ProjectCard`, `SkillBadge`)
- **UI Components** - Atomic building blocks (`NavLink`, `Button3D`)

### 6. **Responsive Design with Breakpoints**
**Why:** Ensures excellent UX on mobile, tablet, and desktop without maintaining separate codebases.

**Key Breakpoints:**
- `md:` (768px) - Primary breakpoint for layout changes
- Hidden elements: Mobile menu, desktop navbar variants
- Flexible grid layouts with Tailwind's `grid-cols-*` utilities

---

## Core Components Explained

### App.jsx
**Purpose:** Root component that sets up routing, theme context, and error boundaries.

**Structure:**
- `ThemeProvider` wraps the entire app to provide dark mode state
- `ErrorBoundary` catches React errors to prevent white screens
- `Router` enables client-side routing between pages

### Navbar.jsx
**Purpose:** Fixed navigation header with dark mode toggle and responsive menu.

**Key Features:**
- Dynamic nav items based on current page (home page shows section links, other pages show page links)
- Smooth scroll to sections on home page
- Mobile hamburger menu with animation
- Dark mode toggle with icon change

**Styling Strategy:**
- `fixed` positioning with `z-50` to stay above other content
- Backdrop blur (`backdrop-blur-sm`) for modern glass-morphism effect
- Gradient text for logo using `bg-clip-text`

### Hero.jsx
**Purpose:** Eye-catching landing section with particle background and introduction.

**Key Features:**
- Particle animation background for visual interest
- Animated heading and CTA button
- Motivational tagline and description

**Styling:** Full viewport height with centered content, dark gradient background

### ProjectCard.jsx
**Purpose:** Displays individual project with image, description, tags, and action links.

**Props:**
- `project` - project data object with all properties

**Features:**
- Responsive grid layout (adapts to mobile, tablet, desktop)
- Tag filtering for skills
- Project links component for different link types (demo, github, prototype)
- Smooth hover animations

### ProjectFilter.jsx
**Purpose:** Manages project filtering and grid layout.

**State Management:**
- `selectedFilter` - currently selected project type or 'all'

**Features:**
- Filter buttons for All, Design, and Development
- Responsive grid that adjusts columns based on screen size
- Animates projects when filter changes

### ThemeContext.jsx
**Purpose:** Provides theme state and persistence across the entire app.

**Why This Approach:**
1. **Persistence:** Saves to localStorage so preference survives page reload
2. **System Preference:** Detects and respects OS dark mode preference
3. **Reactivity:** All components automatically update when theme changes
4. **Performance:** Uses `useState` with initializer function to avoid recalculating on every render

**How It Works:**
1. On first render, check localStorage
2. If no saved preference, use system preference via `matchMedia`
3. When user toggles dark mode, update state and localStorage
4. Apply 'dark' class to HTML element, triggering all `dark:` CSS rules

---

## Data Files

### projects.js
Contains array of all project objects. Each project needs:

```javascript
{
  id: "unique-id",
  title: "Project Title",
  description: "Project description",
  image: importedImage,
  tags: ["Skill1", "Skill2"],
  type: "design" | "development",
  prototype: "url",      // for design projects
  demo: "url",           // for development projects
  github: "url",         // for development projects
  caseStudyUrl: "url"    // optional, links to Behance or similar
}
```

### skills.js
Contains array of skill categories, each with:
- `category` - category name (Frontend, Backend, etc.)
- `skills` - array of skill names

---

## Styling System

### Color Palette
- **Light Mode:** White background, gray text
- **Dark Mode:** Gray-900 background, light text
- **Accents:** Blue-600, Purple-600 for gradients and highlights
- **Neutral:** Gray scale for secondary elements

### Spacing Convention
Tailwind's default 4px-based spacing is used consistently:
- `p-4` = padding of 1rem (16px)
- `gap-8` = 2rem (32px) gap between elements
- `mt-20` = margin-top of 5rem (80px)

### Typography
- **Font:** Sora (configured in tailwind.config.js)
- **Line Height:** 1.5 for body text (default in Tailwind)
- **Font Weights:** 400 (normal), 600 (semi-bold), 700 (bold), 900 (black)

### Dark Mode Implementation
Every interactive element uses the `dark:` prefix pattern:
```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

This pattern is consistent throughout the codebase for:
- Background colors
- Text colors
- Border colors
- Hover states

---

## Animation Patterns

### Entrance Animations
Used to draw attention when sections come into view or page loads.

**Example:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}  // start state
  animate={{ opacity: 1, y: 0 }}   // end state
  transition={{ duration: 0.5 }}   // timing
>
  Content
</motion.div>
```

### Hover Interactions
Provides visual feedback on interactive elements.

**Example:**
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}  // enlarge on hover
  whileTap={{ scale: 0.95 }}    // shrink when clicked
>
  Click Me
</motion.button>
```

### Staggered Animations
Multiple elements animate in sequence, creating a cascade effect.

**Used in:**
- Project cards appearing
- Skill items revealing
- List items in contact section

---

## Routing Structure

**Home Page (`/`)**
- Shows: Hero, About, Project Filter, Skills, Contact sections
- Full portfolio overview

**Projects Page (`/projects`)**
- Shows: All projects with filtering
- Dedicated page for project showcase
- Useful for sharing specific project listings

---

## Performance Optimizations

1. **Code Splitting:** Vite automatically splits code by page
2. **Lazy Animations:** Only animate when visible (reduce motion respected)
3. **CSS Classes:** Tailwind's purging removes unused styles
4. **Image Optimization:** Images are imported as modules

---

## Best Practices Used

1. **Semantic HTML:** Proper heading hierarchy, button elements for clickable items
2. **Accessibility:**
   - `aria-label` on icon buttons
   - Semantic HTML structure
   - Color contrast in light and dark modes
   - Keyboard navigation support

3. **Error Handling:** ErrorBoundary catches unexpected crashes

4. **Responsive Design:** Mobile-first approach with `md:` breakpoints

5. **Component Reusability:** UI components like `NavLink`, `SkillBadge`, `ProjectCard` are generic and reusable

---

## Extending the Portfolio

### Adding a New Project
1. Add project image to `src/assets/`
2. Import image in `src/data/projects.js`
3. Add project object to the `projects` array
4. Component automatically renders the new project

### Adding New Skills
1. Update `src/data/skills.js` array
2. Skill automatically appears in Skills section

### Changing Colors/Theme
1. Update `tailwind.config.js` theme section
2. Update `dark:` prefixed classes in components
3. All instances automatically use new colors

### Adding New Sections
1. Create new component in `src/components/`
2. Import in relevant page
3. Add navigation link in `Navbar.jsx`

---

## Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## Browser Support

- Modern browsers with ES2020+ support
- Dark mode: All modern browsers
- Animations: Chrome, Firefox, Safari, Edge
- CSS Grid: All modern browsers
- CSS Custom Properties: All modern browsers

---

## Future Enhancement Ideas

1. **Project Search:** Add search functionality to find projects by title or skill
2. **Blog Section:** Add MDX support for case study blog posts
3. **Comments:** Add Supabase integration for project feedback
4. **Analytics:** Track most viewed projects and skills
5. **Database:** Move projects to Supabase for easier management
6. **Newsletter:** Email subscription for updates
7. **Dark Mode Toggle:** Save preference per device

---

## Troubleshooting

### Dark Mode Not Persisting
- Check browser localStorage is enabled
- Clear `theme` key and reload

### Animations Janky
- Disable reduce-motion setting in OS
- Check browser hardware acceleration is enabled

### Styles Not Updating
- Ensure Tailwind classes are in `content` array in `tailwind.config.js`
- Restart dev server

### Images Not Loading
- Ensure image files exist in `src/assets/`
- Check import paths are correct relative to file location
