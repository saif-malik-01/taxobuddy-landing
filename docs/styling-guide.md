# Styling Guide

This comprehensive guide covers styling in the GlobalBank Next.js template, including Tailwind CSS configuration, custom themes, responsive design, and Next.js-specific styling patterns.

## Table of Contents

- [Tailwind CSS Configuration](#tailwind-css-configuration)
- [Custom Color System](#custom-color-system)
- [Typography System](#typography-system)
- [Responsive Design](#responsive-design)
- [Custom Components Styling](#custom-components-styling)
- [Theme Customization](#theme-customization)
- [Animation and Transitions](#animation-and-transitions)
- [CSS Organization](#css-organization)
- [Performance Considerations](#performance-considerations)

## Tailwind CSS Configuration

The GlobalBank Next.js template uses **Tailwind CSS 4.x** with configuration defined in `tailwind.config.js` and global styles in `src/app/globals.css`.

### Current Configuration Structure

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* Custom CSS variables */
  }
}
```

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1820px',
      },
      colors: {
        green: {
          400: '#ccff00',
          500: '#b2e600',
          600: '#8ab800',
        },
      },
    },
  },
  plugins: [],
}
```

### Next.js Integration

Next.js has built-in Tailwind CSS support:

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tailwind CSS is automatically configured
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
}

module.exports = nextConfig
```

## Custom Color System

The template defines several custom color palettes optimized for financial and business applications.

### Color Palettes

#### 1. Pink Palette (Primary Brand)
```css
--color-pink-50: #fff1f3;    /* Lightest */
--color-pink-100: #ffe4e8;
--color-pink-200: #fecdd7;
--color-pink-300: #fea3b7;
--color-pink-400: #fc7090;
--color-pink-500: #f53d6c;   /* Primary brand color */
--color-pink-600: #e21c58;
--color-pink-700: #bf114a;
--color-pink-800: #a01145;
--color-pink-900: #891241;   /* Darkest */
```

#### 2. PinkSecondary Palette
```css
--color-pinkSecondary-500: #c13d58;  /* Secondary brand color */
--color-pinkSecondary-900: #320d17;  /* Dark secondary */
```

#### 3. DarkPink Palette
```css
--color-darkPink-900: #1f0a0f;  /* Primary dark background */
```

#### 4. SweetPink Palette
```css
--color-sweetPink-500: #ef4477;  /* Accent color */
--color-sweetPink-200: #fdceda;  /* Light accent backgrounds */
```

### Using Custom Colors

```jsx
// Background colors
<div className="bg-pink-500">Primary background</div>
<div className="bg-darkPink-900">Dark background</div>
<div className="bg-sweetPink-200">Light accent background</div>

// Text colors
<h1 className="text-pink-500">Primary text</h1>
<p className="text-pinkSecondary-500">Secondary text</p>

// Border colors
<div className="border border-pink-300">Bordered element</div>

// Hover states
<button className="bg-pink-500 hover:bg-pink-600">
  Hover button
</button>
```

### Adding New Color Palettes

To add a new color palette:

```css
/* Add to src/index.css */
@theme {
  /* Existing colors... */

  /* New brand color palette */
  --color-brand-50: #f0f9ff;
  --color-brand-100: #e0f2fe;
  --color-brand-200: #bae6fd;
  --color-brand-300: #7dd3fc;
  --color-brand-400: #38bdf8;
  --color-brand-500: #0ea5e9;  /* Main brand color */
  --color-brand-600: #0284c7;
  --color-brand-700: #0369a1;
  --color-brand-800: #075985;
  --color-brand-900: #0c4a6e;
}
```

Usage:
```jsx
<div className="bg-brand-500 text-white">
  New brand color
</div>
```

## Typography System

### Font Configuration

The template uses system fonts for optimal performance:

```css
/* Default font stack (system fonts) */
font-family: ui-sans-serif, system-ui, sans-serif;
```

### Adding Custom Fonts with Next.js Font Optimization

```tsx
// src/app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

```tsx
// For local fonts
import localFont from 'next/font/local'

const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
```

### Typography Classes

```tsx
// Headings
<h1 className="text-4xl font-bold">Main Heading</h1>
<h2 className="text-2xl font-semibold">Section Heading</h2>
<h3 className="text-xl font-medium">Subsection</h3>

// Body text
<p className="text-base">Regular paragraph text</p>
<p className="text-sm">Smaller text</p>
<p className="text-lg">Larger text</p>

// Text weights
<span className="font-light">Light text</span>
<span className="font-normal">Normal text</span>
<span className="font-medium">Medium text</span>
<span className="font-semibold">Semibold text</span>
<span className="font-bold">Bold text</span>
```

### Custom Typography Scale

Add custom font sizes in your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '6xl': '3.75rem',    // 60px
        '7xl': '4.5rem',     // 72px
      },
    },
  },
}
```

## Responsive Design

### Breakpoints

The template includes a custom `3xl` breakpoint for ultra-wide screens:

```css
@theme {
  --breakpoint-3xl: 1820px;
}
```

All available breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
- `3xl`: 1820px (custom)

### Responsive Utilities

```tsx
// Responsive layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>

// Responsive text sizing
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl">
  Responsive heading
</h1>

// Responsive spacing
<div className="p-4 md:p-6 lg:p-8 3xl:p-12">
  Content with responsive padding
</div>

// Show/hide elements
<div className="hidden lg:block">Desktop only content</div>
<div className="block lg:hidden">Mobile only content</div>
```

### Container Usage

```tsx
// Centered container with responsive padding
<div className="container mx-auto px-4">
  <div className="max-w-4xl mx-auto">
    Content
  </div>
</div>

// Full-width sections with responsive containers
<section className="bg-gray-50">
  <div className="container mx-auto px-4 py-16">
    Section content
  </div>
</section>
```

## Custom Components Styling

### Button Styling System

The template includes a comprehensive button component with multiple variants:

```tsx
// Button variants (from src/components/ui/button.tsx)
const variantClasses = {
  primary: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white',
  outline: 'border-2 border-green-500 text-green-500 hover:bg-green-50',
  ghost: 'text-green-500 hover:bg-green-50',
  white: 'bg-white text-gray-900 hover:bg-gray-50'
} as const;

// Usage
<Button variant="primary" size="large">Primary Button</Button>
<Button variant="outline">Outline Button</Button>
```

### Card Styling

```tsx
// Basic card
<div className="bg-white rounded-xl shadow-lg p-6">
  Card content
</div>

// Interactive card
<div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer">
  Hoverable card
</div>

// Card with gradient border
<div className="relative p-6 bg-white rounded-xl">
  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-0.5">
    <div className="bg-white rounded-lg h-full w-full p-6">
      Gradient border card
    </div>
  </div>
</div>
```

### Form Styling

```tsx
// Input field
<input
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-green-400 focus:border-green-500 transition-colors"
  placeholder="Enter text"
/>

// Form group
<div className="mb-6">
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Email Address
  </label>
  <input
    type="email"
    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-green-400 focus:border-green-500"
  />
</div>
```

## Theme Customization

### Dark Mode with Next.js

```bash
npm install next-themes
```

```tsx
// src/components/theme-provider.tsx
'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

```tsx
// src/app/layout.tsx
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

```tsx
// Theme toggle component
'use client'

import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      Toggle theme
    </button>
  )
}
```

### Brand Theme Customization

Replace the green theme with your brand colors:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Your brand primary palette
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',  // Your brand blue
          900: '#1e3a8a',
        },
        // Override default green with your brand colors
        green: {
          400: '#3b82f6',  // Map to your brand color
          500: '#2563eb',
          600: '#1d4ed8',
        },
      },
    },
  },
}
```

## Animation and Transitions

### Built-in Animations

```tsx
// Loading spinner
<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>

// Pulse animation
<div className="animate-pulse bg-gray-200 rounded h-4 w-3/4"></div>

// Bounce animation
<div className="animate-bounce bg-green-500 rounded-full h-8 w-8"></div>
```

### Custom Transitions

```tsx
// Smooth transitions
<button className="bg-green-500 hover:bg-green-600 transition-colors duration-300">
  Smooth color transition
</button>

// Transform transitions
<div className="transform hover:scale-105 transition-transform duration-300">
  Hover to scale
</div>

// Multiple property transitions
<div className="opacity-0 translate-y-4 transition-all duration-500 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0">
  Fade in and slide up
</div>
```

### Custom Animations

Add custom animations in your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
}
```

```tsx
// Usage
<div className="animate-fade-in">Fading in content</div>
<div className="animate-slide-up">Sliding up content</div>
```

## CSS-in-JS Alternatives

### Styled Components with Next.js

```bash
npm install styled-components
npm install --save-dev @types/styled-components
```

```tsx
// src/components/styled-button.tsx
'use client'

import styled from 'styled-components'

const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;

  ${props => props.variant === 'primary' && `
    background-color: #22c55e;
    color: white;
    &:hover {
      background-color: #16a34a;
    }
  `}

  ${props => props.variant === 'secondary' && `
    background-color: #e5e7eb;
    color: #374151;
    &:hover {
      background-color: #d1d5db;
    }
  `}
`

export default function Button({ children, variant = 'primary', ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}
```

### CSS Modules

Next.js has built-in CSS Modules support:

```css
/* src/components/Button.module.css */
.button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.primary {
  background-color: #22c55e;
  color: white;
}

.primary:hover {
  background-color: #16a34a;
}

.secondary {
  background-color: #e5e7eb;
  color: #374151;
}
```

```tsx
// src/components/Button.tsx
import styles from './Button.module.css'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export default function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
```

## CSS Organization

### Structure

```
src/
├── index.css           # Main Tailwind imports and theme
├── components/
│   └── [component]/
│       └── styles.css  # Component-specific styles (if needed)
└── styles/
    ├── components.css  # Global component styles
    ├── utilities.css   # Custom utility classes
    └── animations.css  # Custom animations
```

### Custom Utility Classes

```css
/* src/styles/utilities.css */
@layer utilities {
  .text-gradient {
    background: linear-gradient(to right, theme('colors.pink.500'), theme('colors.purple.500'));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .shadow-glow {
    box-shadow: 0 0 20px rgba(245, 61, 108, 0.3);
  }
}
```

Usage:
```jsx
<h1 className="text-gradient text-4xl font-bold">Gradient Text</h1>
<div className="glass-effect p-6 rounded-xl">Glass effect card</div>
<button className="shadow-glow bg-pink-500 text-white px-6 py-3 rounded-xl">
  Glowing button
</button>
```

### Component-Specific Styles

When Tailwind utilities aren't sufficient:

```css
/* src/components/hero/styles.css */
.hero-background {
  background: linear-gradient(135deg,
    theme('colors.pink.300') 0%,
    theme('colors.pink.700') 50%,
    theme('colors.darkPink.900') 100%
  );
}

.hero-pattern {
  background-image: url('/images/hero-pattern.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

## Performance Considerations

### CSS Optimization

1. **Purge Unused Styles**: Tailwind automatically removes unused styles in production
2. **Minimize Custom CSS**: Use Tailwind utilities when possible
3. **Optimize Images**: Use optimized formats and proper sizing

### Bundle Size

```js
// Check your CSS bundle size
npm run build

// Analyze what's included
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

### Critical CSS

For better performance, consider extracting critical CSS:

```css
/* Critical styles for above-the-fold content */
.hero-section {
  /* Essential styles only */
}

/* Non-critical styles can be loaded later */
.below-fold-content {
  /* Styles for content below the fold */
}
```

## Best Practices

### 1. Consistent Spacing

Use Tailwind's spacing scale consistently:

```jsx
// Good: Consistent spacing
<div className="p-4 mb-6">
  <div className="mb-4">Section 1</div>
  <div className="mb-4">Section 2</div>
</div>

// Avoid: Inconsistent spacing
<div className="p-3 mb-5">
  <div className="mb-3">Section 1</div>
  <div className="mb-5">Section 2</div>
</div>
```

### 2. Component Abstraction

Create reusable style patterns:

```jsx
// Create utility functions for common patterns
const cardStyles = "bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow";
const buttonPrimary = "bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl transition-colors";

<div className={cardStyles}>Card content</div>
<button className={buttonPrimary}>Action button</button>
```

### 3. Responsive First

Design mobile-first, then enhance for larger screens:

```jsx
// Good: Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// Less optimal: Desktop-first
<div className="text-lg md:text-base sm:text-sm">
  Not mobile-first
</div>
```

### 4. Semantic Class Names

When using custom CSS, use semantic names:

```css
/* Good: Semantic names */
.hero-section { }
.pricing-card { }
.testimonial-quote { }

/* Avoid: Visual names */
.pink-box { }
.big-text { }
.rounded-thing { }
```

## Debugging Styles

### Development Tools

1. **Tailwind CSS IntelliSense**: VS Code extension for class completion
2. **Browser DevTools**: Inspect and modify styles in real-time
3. **Tailwind UI DevTools**: Browser extension for debugging Tailwind classes

### Common Issues

```jsx
// Issue: Styles not applying
// Solution: Check class name spelling and Tailwind version compatibility

// Issue: Custom styles not working
// Solution: Ensure proper import order
// index.css should import Tailwind first, then custom styles

// Issue: Responsive styles not working
// Solution: Check breakpoint syntax
<div className="text-sm md:text-lg">  {/* Correct */}
<div className="md:text-lg text-sm">  {/* Also correct - order doesn't matter */}
```

## Next Steps

- **[Component styling](components-guide.md)** - Style individual components
- **[Performance optimization](loading-and-performance.md)** - Optimize CSS performance
- **[Deployment](deployment.md)** - Production styling considerations
- **[Customization](customization-guide.md)** - Brand customization techniques