# Components Guide

This comprehensive guide explains the component architecture of the GlobalBank template, how to use existing components, and how to create new ones. The template follows a modular component structure for maximum reusability and maintainability.

## Table of Contents

- [Component Architecture](#component-architecture)
- [Component Categories](#component-categories)
- [UI Components](#ui-components)
- [Layout Components](#layout-components)
- [Common Components](#common-components)
- [Feature Components](#feature-components)
- [Creating Custom Components](#creating-custom-components)
- [Component Props and Usage](#component-props-and-usage)
- [Best Practices](#best-practices)

## Component Architecture

The GlobalBank template uses a hierarchical component structure:

```
src/components/
├── common/          # Shared utility components
│   ├── error-boundary.tsx
│   ├── loading.tsx
│   └── top-bar.tsx
├── layout/          # Layout and structural components
│   ├── header.tsx
│   ├── nav-bar.tsx
│   ├── footer.tsx
│   └── page-layout.tsx
└── ui/              # Basic UI building blocks
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    └── index.ts

src/features/        # Feature-specific components
├── home/
│   └── components/
├── auth/
│   └── components/
├── pricing/
│   └── components/
└── [feature]/
    └── components/
```

### Design Principles

1. **Single Responsibility**: Each component has one clear purpose
2. **Reusability**: Components are designed to be used across different contexts
3. **Composition**: Complex UIs are built by composing simpler components
4. **TypeScript Interface**: Clear, typed props for better developer experience
5. **Server/Client Components**: Proper use of Next.js server and client components
6. **Accessibility**: Components include proper ARIA attributes and semantic markup

## Component Categories

### 1. UI Components (`src/components/ui/`)
Basic building blocks for user interface elements.

### 2. Layout Components (`src/components/layout/`)
Structural components that define page layout and navigation.

### 3. Common Components (`src/components/common/`)
Utility components used across different features.

### 4. Feature Components (`src/features/[feature]/components/`)
Components specific to particular features or pages.

## UI Components

### Button Component

**Location**: `src/components/ui/button.tsx`

A versatile button component with multiple variants and sizes.

#### Usage

```tsx
'use client';

import Button from '@/components/ui/button';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="primary">Primary Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="white">White Button</Button>

// With sizes
<Button size="small">Small</Button>
<Button size="default">Default</Button>
<Button size="large">Large</Button>

// With additional props
<Button
  variant="primary"
  size="large"
  disabled={false}
  onClick={handleClick}
  className="custom-class"
>
  Get Started
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Button content |
| `variant` | string | `'primary'` | Style variant: `'primary'`, `'outline'`, `'ghost'`, `'white'` |
| `size` | string | `'default'` | Size: `'small'`, `'default'`, `'large'` |
| `disabled` | boolean | `false` | Whether button is disabled |
| `type` | string | `'button'` | HTML button type |
| `className` | string | `''` | Additional CSS classes |
| `onClick` | function | - | Click handler |

#### Styling Customization

To add new button variants:

```tsx
// In button.tsx, add to variantClasses
const variantClasses = {
  // ... existing variants
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400',
  danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-400'
} as const;
```

### Card Component

**Location**: `src/components/ui/card.tsx`

A flexible container component for content grouping.

#### Usage

```tsx
import Card from '@/components/ui/card';

<Card className="p-6">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// With hover effects
<Card hover className="p-6">
  <h3>Hoverable Card</h3>
</Card>
```

### Input Component

**Location**: `src/components/ui/input.tsx`

Form input component with validation states.

#### Usage

```tsx
'use client';

import Input from '@/components/ui/input';

<Input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={setEmail}
  error={emailError}
  required
/>
```

## Layout Components

### Page Layout

**Location**: `src/components/layout/page-layout.tsx`

Main wrapper component for page structure. See [Layout System Guide](layout-system.md) for detailed usage.

```tsx
import PageLayout from '@/components/layout/page-layout';

<PageLayout title="Page Title">
  <YourContent />
</PageLayout>
```

### Navigation Bar

**Location**: `src/components/layout/nav-bar.tsx`

Responsive navigation component with mobile menu support.

```tsx
'use client';

import NavBar from '@/components/layout/nav-bar';

<NavBar theme="light" />  // For dark backgrounds
<NavBar theme="dark" />   // For light backgrounds
```

### Header and Footer

**Location**: `src/components/layout/header.tsx`, `src/components/layout/footer.tsx`

Standard page header and footer components. See [Layout System Guide](layout-system.md) for customization.

## Common Components

### Loading Component

**Location**: `src/components/common/loading.tsx`

Simple loading spinner for async operations.

```tsx
import Loading from '@/components/common/loading';

// Basic usage
<Loading />

// In Suspense fallback
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

#### Customizing Loading Spinner

```tsx
interface LoadingProps {
  size?: 'small' | 'default' | 'large';
}

function Loading({ size = 'default' }: LoadingProps) {
  const sizeClasses = {
    small: 'h-6 w-6',
    default: 'h-12 w-12',
    large: 'h-16 w-16'
  } as const;

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className={`animate-spin rounded-full border-b-2 border-pink-600 ${sizeClasses[size]}`}></div>
    </div>
  );
}
```

### Error Boundary

**Location**: `src/components/common/error-boundary.tsx`

React error boundary for graceful error handling.

```tsx
import ErrorBoundary from '@/components/common/error-boundary';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### Top Bar

**Location**: `src/components/common/top-bar.tsx`

Promotional or announcement bar. See [Layout System Guide](layout-system.md) for customization.

## Feature Components

Feature components are organized by functionality and located in `src/features/[feature]/components/`.

### Home Feature Components

**Location**: `src/features/home/components/`

#### Hero Section

**File**: `hero-section.tsx`

Main landing page hero with call-to-action.

```tsx
import HeroSection from '@/features/home/components/hero-section';

<HeroSection />
```

#### Features Section

**File**: `features-section.tsx`

Displays product features from JSON data.

```tsx
import FeaturesSection from '@/features/home/components/features-section';

<FeaturesSection />
```

#### Testimonials Section

**File**: `testimonials-section.tsx`

Customer testimonials carousel.

```tsx
import TestimonialsSection from '@/features/home/components/testimonials-section';

<TestimonialsSection />
```

### Pricing Feature Components

**Location**: `src/features/pricing/components/`

Components specific to pricing pages.

### Authentication Feature Components

**Location**: `src/features/auth/components/`

Login and registration form components.

## Creating Custom Components

### Step 1: Component Structure

```tsx
// src/components/ui/your-component.tsx
import React from 'react';

interface YourComponentProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Description of your component
 */
function YourComponent({
  title,
  children,
  className = '',
  ...props
}: YourComponentProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`base-classes ${className}`} {...props}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default YourComponent;
```

### Step 2: Add to Index File

```tsx
// src/components/ui/index.ts
export { default as Button } from './button';
export { default as Card } from './card';
export { default as Input } from './input';
export { default as YourComponent } from './your-component';
```

### Step 3: Usage

```tsx
import { YourComponent } from '@/components/ui';

<YourComponent title="Hello World" className="custom-styles">
  <p>Component content</p>
</YourComponent>
```

### Component Template

```tsx
import React from 'react';

interface ComponentNameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'alternate';
}

/**
 * [Component Name] - Brief description
 */
function ComponentName({
  children,
  className = '',
  variant = 'default',
  ...otherProps
}: ComponentNameProps & React.HTMLAttributes<HTMLDivElement>) {
  // Component logic here
  const baseClasses = 'base styles here';
  const variantClasses = {
    default: 'default styles',
    alternate: 'alternate styles'
  } as const;

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={combinedClasses} {...otherProps}>
      {children}
    </div>
  );
}

export default ComponentName;
```

## Component Props and Usage

### Props Patterns

#### 1. Children Prop Pattern

```tsx
interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children, ...props }: ContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

// Usage
<Container className="p-4">
  <Content />
</Container>
```

#### 2. Render Prop Pattern

```tsx
interface DataProviderProps<T> {
  render: (data: T) => React.ReactNode;
  data: T;
}

function DataProvider<T>({ render, data }: DataProviderProps<T>) {
  return <>{render(data)}</>;
}

// Usage
<DataProvider
  data={someData}
  render={(data) => <DataDisplay data={data} />}
/>
```

#### 3. Compound Component Pattern

```tsx
interface CardProps {
  children: React.ReactNode;
}

interface CardSubComponentProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}

Card.Header = ({ children }: CardSubComponentProps) => <div className="card-header">{children}</div>;
Card.Body = ({ children }: CardSubComponentProps) => <div className="card-body">{children}</div>;
Card.Footer = ({ children }: CardSubComponentProps) => <div className="card-footer">{children}</div>;

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

### Common Props

Most components accept these standard props:

| Prop | Type | Description |
|------|------|-------------|
| `className` | string | Additional CSS classes |
| `children` | ReactNode | Child components/content |
| `style` | object | Inline styles |
| `id` | string | HTML id attribute |
| `data-*` | any | Data attributes |

## Best Practices

### 1. Component Documentation

Always document your components:

```jsx
/**
 * Button component with multiple variants
 *
 * @example
 * <Button variant="primary" size="large">
 *   Click me
 * </Button>
 *
 * @param {Object} props - Component props
 * @param {string} props.variant - Button style variant
 * @param {string} props.size - Button size
 */
```

### 2. TypeScript Interfaces

Use TypeScript interfaces for prop validation:

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ variant = 'primary', size = 'medium', children, onClick }: ButtonProps) {
  // Component implementation
}
```

### 3. Default Parameters

Provide sensible defaults using TypeScript default parameters:

```tsx
function Button({
  variant = 'primary',
  size = 'medium',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  // Component implementation
}
```

### 4. Accessibility

Include proper ARIA attributes:

```jsx
<button
  aria-label={ariaLabel}
  aria-pressed={isPressed}
  role="button"
  tabIndex={tabIndex}
>
  {children}
</button>
```

### 5. Performance Optimization

Use React.memo for expensive components:

```tsx
import { memo } from 'react';

interface ExpensiveComponentProps {
  data: SomeDataType;
}

const ExpensiveComponent = memo(({ data }: ExpensiveComponentProps) => {
  // Component logic
  return <div>{/* Render logic */}</div>;
});
```

### 6. Custom Hooks

Extract component logic into custom hooks:

```tsx
// useButton.ts
interface UseButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

function useButton({ variant, size, disabled }: UseButtonProps) {
  const classes = useMemo(() => {
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50' : ''}`;
  }, [variant, size, disabled]);

  return { classes };
}

// Button component
function Button(props: ButtonProps) {
  const { classes } = useButton(props);
  return <button className={classes}>{props.children}</button>;
}
```

### 7. Component Testing

Create testable components:

```jsx
// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## Component Styling Guidelines

### 1. Tailwind CSS Classes

Use Tailwind for styling:

```tsx
// Good: Utility classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">

// Avoid: Inline styles
<div style={{ display: 'flex', padding: '1rem' }}>
```

### 2. Conditional Classes

Use template literals for conditional styling:

```jsx
const buttonClasses = `
  px-4 py-2 rounded
  ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}
  ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}
`;
```

### 3. Component Variants

Create clear variant systems:

```jsx
const variants = {
  primary: 'bg-pink-500 text-white',
  secondary: 'bg-gray-500 text-white',
  outline: 'border border-pink-500 text-pink-500'
};
```

## Next.js Server and Client Components

### Understanding Server vs Client Components

Next.js 15 introduces a clear distinction between Server Components (default) and Client Components.

#### Server Components (Default)

Server Components render on the server and are great for:
- Static content
- Data fetching
- SEO optimization
- Reduced bundle size

```tsx
// This is a Server Component by default
import { BlogPost } from '@/types';

interface BlogListProps {
  posts: BlogPost[];
}

// No 'use client' directive = Server Component
export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-6">
      {posts.map(post => (
        <article key={post.id} className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

#### Client Components

Client Components run in the browser and are needed for:
- Interactive features (onClick, onChange)
- State management (useState, useReducer)
- Browser APIs (localStorage, geolocation)
- Third-party libraries that require browser context

```tsx
'use client'; // This directive makes it a Client Component

import { useState } from 'react';

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function InteractiveButton({ children, onClick }: InteractiveButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick?.();
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded transition-colors ${
        isClicked ? 'bg-green-500' : 'bg-blue-500'
      } text-white`}
    >
      {children}
    </button>
  );
}
```

### Best Practices for Component Architecture

1. **Use Server Components by default** - Only add 'use client' when needed
2. **Minimize Client Component boundaries** - Keep interactive parts small
3. **Pass data down from Server to Client Components**

```tsx
// Server Component
import ClientButton from './client-button';

export default function ProductPage({ product }: { product: Product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Pass data to Client Component */}
      <ClientButton productId={product.id} />
    </div>
  );
}
```

```tsx
// Client Component
'use client';

import { useState } from 'react';

interface ClientButtonProps {
  productId: string;
}

export default function ClientButton({ productId }: ClientButtonProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // Client-side logic
    setIsAdded(true);
    // API call logic here
  };

  return (
    <button onClick={handleAddToCart} className="btn-primary">
      {isAdded ? 'Added!' : 'Add to Cart'}
    </button>
  );
}
```

## Next Steps

- **[Customize styling](styling-guide.md)** - Learn advanced styling techniques
- **[Optimize performance](loading-and-performance.md)** - Component performance tips
- **[Manage component data](data-management.md)** - Connect components to data
- **[Test components](troubleshooting.md)** - Testing and debugging guide