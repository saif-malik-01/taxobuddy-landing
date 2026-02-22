# Routing and Pages

This guide explains how the GlobalBank template handles routing, how to add new pages, and how to configure navigation. The template uses Next.js 15 App Router for file-based routing with enhanced features like layouts, loading states, and error boundaries.

## Table of Contents

- [App Router Overview](#app-router-overview)
- [File-Based Routing](#file-based-routing)
- [Existing Routes](#existing-routes)
- [Adding New Pages](#adding-new-pages)
- [Layouts and Templates](#layouts-and-templates)
- [Loading and Error States](#loading-and-error-states)
- [Dynamic Routes](#dynamic-routes)
- [Route Handlers (API Routes)](#route-handlers-api-routes)
- [Navigation and Links](#navigation-and-links)

## App Router Overview

Next.js 15 uses the App Router, a file-based routing system that co-locates pages, layouts, and other route-related files.

### Key Directories
- `src/app/` - Root App Router directory
- `src/app/layout.tsx` - Root layout component
- `src/app/page.tsx` - Home page
- `src/app/[route]/` - Individual page directories

### App Router Structure

```
src/app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx           # Home page (/)
├── loading.tsx        # Global loading UI
├── error.tsx          # Global error UI
├── not-found.tsx      # 404 page
├── about/
│   ├── page.tsx       # About page (/about)
│   └── loading.tsx    # About loading UI (optional)
├── blog/
│   ├── page.tsx       # Blog listing (/blog)
│   ├── [slug]/
│   │   └── page.tsx   # Blog post (/blog/[slug])
│   └── loading.tsx    # Blog loading UI
└── api/
    └── contact/
        └── route.ts   # API endpoint (/api/contact)
```

## File-Based Routing

Next.js App Router uses file and folder names to determine routes:

- `page.tsx` - Creates a route segment
- `layout.tsx` - Shared UI that wraps pages
- `loading.tsx` - Loading UI for route segment
- `error.tsx` - Error UI for route segment
- `not-found.tsx` - 404 UI for route segment

## Existing Routes

### Current Page Structure

| Route | File Location | Navigation | Description |
|-------|---------------|------------|-------------|
| `/` | `src/app/page.tsx` | ✅ Home | Landing page with hero and features |
| `/about` | `src/app/about/page.tsx` | ✅ About | Company information and team |
| `/pricing` | `src/app/pricing/page.tsx` | ✅ Pricing | Service pricing and plans |
| `/blog` | `src/app/blog/page.tsx` | ✅ Blog | Blog listing page |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | ❌ | Individual blog post |
| `/contact` | `src/app/contact/page.tsx` | ✅ Contact | Contact form and information |
| `/login` | `src/app/login/page.tsx` | ❌ | User login form |
| `/register` | `src/app/register/page.tsx` | ❌ | User registration form |

### Route Metadata

Each page can export metadata for SEO and social sharing:

```tsx
// src/app/about/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - GlobalBank',
  description: 'Learn about GlobalBank's mission and team',
  openGraph: {
    title: 'About Us - GlobalBank',
    description: 'Learn about GlobalBank's mission and team',
  },
};

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      {/* Page content */}
    </div>
  );
}
```

## Adding New Pages

### Step 1: Create the Page Directory and File

1. **Create a new directory** in `src/app/`:
   ```bash
   mkdir src/app/services
   ```

2. **Create the page file** `src/app/services/page.tsx`:
   ```tsx
   import { Metadata } from 'next';

   export const metadata: Metadata = {
     title: 'Services - GlobalBank',
     description: 'Explore our comprehensive banking services',
   };

   export default function ServicesPage() {
     return (
       <div className="container mx-auto px-4 py-16">
         <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
         {/* Your page content here */}
       </div>
     );
   }
   ```

### Step 2: Add Loading State (Optional)

Create `src/app/services/loading.tsx` for a loading state:

```tsx
export default function ServicesLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded mb-8 mx-auto w-64"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
}
```

### Step 3: Update Navigation

Update your navigation configuration to include the new page. This depends on how your navigation is structured in the layout components.

### Step 4: Test Your New Route

```bash
npm run dev
```

Navigate to `http://localhost:3000/services` to see your new page.

## Layouts and Templates

### Root Layout

The root layout (`src/app/layout.tsx`) wraps all pages:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### Nested Layouts

Create layouts for specific route groups:

```tsx
// src/app/blog/layout.tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-container">
      <aside className="blog-sidebar">
        {/* Blog sidebar */}
      </aside>
      <div className="blog-content">
        {children}
      </div>
    </div>
  );
}
```

## Loading and Error States

### Loading UI

Create loading states for better user experience:

```tsx
// src/app/loading.tsx (global loading)
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
    </div>
  );
}
```

```tsx
// src/app/blog/loading.tsx (blog-specific loading)
export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animate-pulse space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-6">
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Error UI

Handle errors gracefully:

```tsx
// src/app/error.tsx (global error)
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
```

## Route Handlers (API Routes)

Create API endpoints using route handlers:

```tsx
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Process contact form submission
  console.log('Contact form:', { name, email, message });

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint' });
}
```

### API Route Usage

```tsx
// Using the API route in a component
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

## Dynamic Routes

### Dynamic Segments

Next.js App Router uses brackets `[]` for dynamic segments:

```tsx
// File: src/app/blog/[slug]/page.tsx
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      {/* Fetch and display blog post using slug */}
    </div>
  );
}
```

### Multiple Dynamic Segments

For more complex dynamic routes:

```tsx
// File: src/app/blog/[category]/[slug]/page.tsx
interface BlogCategoryPostProps {
  params: {
    category: string;
    slug: string;
  };
}

export default function BlogCategoryPost({ params }: BlogCategoryPostProps) {
  const { category, slug } = params;

  return (
    <div>
      <h1>Category: {category}</h1>
      <h2>Post: {slug}</h2>
    </div>
  );
}
```

### Catch-All Routes

For routes that should match multiple segments:

```tsx
// File: src/app/docs/[...slug]/page.tsx
interface DocsPageProps {
  params: {
    slug: string[];
  };
}

export default function DocsPage({ params }: DocsPageProps) {
  const { slug } = params;
  // slug is an array: ['getting-started', 'installation'] for /docs/getting-started/installation

  return (
    <div>
      <h1>Docs: {slug.join(' / ')}</h1>
    </div>
  );
}
```

## Navigation and Links

### Next.js Link Component

Use the Next.js Link component for navigation:

```tsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/about" className="nav-link">
        About
      </Link>
      <Link href="/blog" className="nav-link">
        Blog
      </Link>
    </nav>
  );
}
```

### Programmatic Navigation

For programmatic navigation, use the `useRouter` hook:

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = async () => {
    // Login logic here
    router.push('/dashboard');
  };

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}
```

### Active Link States

Create an active link component that highlights current page:

```tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export default function ActiveLink({
  href,
  children,
  className = '',
  activeClassName = 'text-green-500'
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ''}`}
    >
      {children}
    </Link>
  );
}
```

## Route Groups and Organization

### Route Groups

Use parentheses to organize routes without affecting the URL:

```
src/app/
├── (marketing)/        # Route group (doesn't affect URL)
│   ├── about/
│   │   └── page.tsx    # /about
│   ├── pricing/
│   │   └── page.tsx    # /pricing
│   └── layout.tsx      # Layout for marketing pages
├── (dashboard)/
│   ├── analytics/
│   │   └── page.tsx    # /analytics
│   └── layout.tsx      # Layout for dashboard pages
└── page.tsx            # / (home page)
```

### Parallel Routes

Render multiple pages in the same layout:

```
src/app/dashboard/
├── @analytics/
│   └── page.tsx
├── @revenue/
│   └── page.tsx
├── layout.tsx
└── page.tsx
```

```tsx
// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  analytics,
  revenue,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="grid grid-cols-2 gap-4">
        {analytics}
        {revenue}
      </div>
    </div>
  );
}
```

## Best Practices

### 1. File Naming Conventions
- Page files: `page.tsx`
- Layout files: `layout.tsx`
- Loading files: `loading.tsx`
- Error files: `error.tsx`
- Folder names: kebab-case (`about-us`, `contact-form`)

### 2. SEO Optimization

Use metadata exports for better SEO:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Descriptive Page Title - GlobalBank',
  description: 'Page description for SEO',
  keywords: ['banking', 'finance', 'services'],
  openGraph: {
    title: 'Descriptive Page Title - GlobalBank',
    description: 'Page description for SEO',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Descriptive Page Title - GlobalBank',
    description: 'Page description for SEO',
  },
};
```

### 3. Error Handling

Next.js App Router provides built-in error boundaries:

```tsx
// src/app/error.tsx - handles errors in this route segment
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

### 4. Performance Optimization

Next.js automatically optimizes your routes:

- **Automatic code splitting** - Each route is automatically split
- **Prefetching** - Links in viewport are prefetched
- **Streaming** - UI can stream as it's ready

```tsx
// Optional: Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/heavy-chart'), {
  loading: () => <p>Loading chart...</p>,
});
```

## Troubleshooting

### Common Issues

1. **404 errors**: Ensure `page.tsx` exists in the correct directory
2. **Layout not applying**: Check that `layout.tsx` is in the correct directory level
3. **Dynamic routes not working**: Verify bracket syntax `[slug]` is correct
4. **TypeScript errors**: Ensure props interfaces match Next.js conventions

### Debugging Routes

```bash
# Build and analyze routes
npm run build

# Check Next.js route structure
ls -la .next/server/app/

# View route tree in development
# Routes are visible in Next.js dev tools
```

## Next Steps

- **[Configure layouts](layout-system.md)** - Customize headers and footers
- **[Manage page content](data-management.md)** - Update page data
- **[Style your pages](styling-guide.md)** - Customize page appearance
- **[Add components](components-guide.md)** - Create reusable page elements