# Data Management

This comprehensive guide explains how to manage content in the GlobalBank Next.js template using various data management patterns. The template supports multiple approaches including JSON files, API routes, database integration, and Next.js data fetching patterns.

## Table of Contents

- [Overview](#overview)
- [Next.js Data Fetching](#nextjs-data-fetching)
- [Static Data with JSON](#static-data-with-json)
- [API Routes](#api-routes)
- [Database Integration](#database-integration)
- [Server Components Data Fetching](#server-components-data-fetching)
- [Client-Side Data Fetching](#client-side-data-fetching)
- [Data Validation](#data-validation)
- [Caching Strategies](#caching-strategies)
- [Best Practices](#best-practices)

## Overview

The GlobalBank Next.js template supports multiple data management approaches to fit different use cases:

- **Static JSON Data**: For content that rarely changes (features, testimonials)
- **API Routes**: For dynamic data and form submissions
- **Server Components**: For server-side data fetching with automatic caching
- **Database Integration**: For dynamic, user-generated content
- **External APIs**: For third-party data integration

## Next.js Data Fetching

Next.js provides several patterns for data fetching:

### Server Components (Recommended)

Fetch data directly in Server Components:

```tsx
// src/app/blog/page.tsx
interface BlogPost {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
}

// This runs on the server
async function getBlogPosts(): Promise<BlogPost[]> {
  // Fetch from API, database, or file system
  const response = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 } // Cache for 60 seconds
  });
  return response.json();
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
```

### Static Site Generation (SSG)

For pages that can be pre-built at build time:

```tsx
// src/app/products/[id]/page.tsx
interface Product {
  id: string;
  name: string;
  description: string;
}

// Generate static params at build time
export async function generateStaticParams() {
  const products = await fetch('https://api.example.com/products').then(res => res.json());

  return products.map((product: Product) => ({
    id: product.id,
  }));
}

// This page will be statically generated
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetch(`https://api.example.com/products/${params.id}`)
    .then(res => res.json());

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
```

### Dynamic Data with Revalidation

For data that changes but should be cached:

```tsx
// Revalidate every hour
async function getLatestNews() {
  const response = await fetch('https://api.news.com/latest', {
    next: { revalidate: 3600 } // 1 hour
  });
  return response.json();
}

// Revalidate on demand
async function getUserProfile(userId: string) {
  const response = await fetch(`https://api.example.com/users/${userId}`, {
    next: { tags: [`user-${userId}`] }
  });
  return response.json();
}

// Later, revalidate with:
// revalidateTag(`user-${userId}`)
```

## Static Data with JSON

For content that rarely changes, JSON files are still effective:

### Data Files Location

```
src/data/
├── navigation.json       # Main navigation menu
├── features.json        # Product features
├── testimonials.json    # Customer testimonials
├── pricing.json         # Pricing plans
└── faq.json            # Frequently asked questions
```

### Structure

```json
[
  {
    "to": "/",
    "label": "Home"
  },
  {
    "to": "/about",
    "label": "About"
  }
]
```

### Fields

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `to` | string | Route path | ✅ |
| `label` | string | Display text | ✅ |

### Usage

```tsx
// Import in Server Component
import navigation from '@/data/navigation.json';

export default function Navigation() {
  return (
    <nav>
      {navigation.map(item => (
        <Link key={item.to} href={item.to}>{item.label}</Link>
      ))}
    </nav>
  );
}
```

### Importing JSON in Server Components

```tsx
// src/app/features/page.tsx
import features from '@/data/features.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - GlobalBank',
};

export default function FeaturesPage() {
  return (
    <div>
      <h1>Our Features</h1>
      {features.map(feature => (
        <div key={feature.id}>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## API Routes

Create API endpoints for dynamic data:

### Creating API Routes

```tsx
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Validate data
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Process the form (save to database, send email, etc.)
    console.log('Contact form submission:', body);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint' });
}
```

### Structure

### Blog API Example

```tsx
// src/app/api/blog/route.ts
import { NextRequest, NextResponse } from 'next/server';
import blogData from '@/data/blog.json';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '10');

  let posts = blogData.posts;

  // Filter by category if provided
  if (category) {
    posts = posts.filter(post => post.category === category);
  }

  // Limit results
  posts = posts.slice(0, limit);

  return NextResponse.json({
    posts,
    total: posts.length,
    categories: blogData.categories
  });
}
```

```tsx
// src/app/api/blog/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import blogData from '@/data/blog.json';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const post = blogData.posts.find(p => p.slug === params.slug);

  if (!post) {
    return NextResponse.json(
      { error: 'Post not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}
```

## Database Integration

For dynamic data, integrate with a database:

### Prisma Setup Example

```bash
npm install prisma @prisma/client
npx prisma init
```

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model BlogPost {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  content     String
  excerpt     String
  category    String
  author      String
  publishedAt DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("blog_posts")
}
```

### Database Helper Functions

```tsx
// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Blog helper functions
export async function getBlogPosts(category?: string) {
  return prisma.blogPost.findMany({
    where: category ? { category } : undefined,
    orderBy: { publishedAt: 'desc' },
  });
}

export async function getBlogPost(slug: string) {
  return prisma.blogPost.findUnique({
    where: { slug },
  });
}

export async function createBlogPost(data: {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
}) {
  return prisma.blogPost.create({ data });
}
```

### Using Database in Server Components

```tsx
// src/app/blog/page.tsx
import { getBlogPosts } from '@/lib/db';
import Link from 'next/link';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h1>Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map(post => (
          <article key={post.id} className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600">{post.excerpt}</p>
            <div className="mt-4 text-sm text-gray-500">
              By {post.author} • {post.publishedAt.toLocaleDateString()}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
```

## Server Components Data Fetching

Server Components can fetch data directly:

```tsx
// src/app/testimonials/page.tsx
import testimonialsData from '@/data/testimonials.json';

// This component renders on the server
export default async function TestimonialsPage() {
  // Could also fetch from an API or database
  const testimonials = testimonialsData;

  return (
    <div>
      <h1>What Our Customers Say</h1>
      <div className="grid gap-6">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
            <blockquote className="text-lg italic">
              "{testimonial.content}"
            </blockquote>
            <cite className="block mt-4 text-sm text-gray-600">
              — {testimonial.author.name}, {testimonial.author.title}
            </cite>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Client-Side Data Fetching

For interactive components that need client-side data:

```tsx
'use client';

import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
}

export default function BlogSearch() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (search) params.set('search', search);

        const response = await fetch(`/api/blog?${params}`);
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded px-3 py-2"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4 mt-4">
          {posts.map(post => (
            <div key={post.id} className="border rounded p-4">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Structure

```json
{
  "plans": [
    {
      "name": "Basic",
      "monthlyPrice": 9,
      "yearlyPrice": 97,
      "period": "month",
      "features": [
        "Customized invoices",
        "Automated reminders"
      ]
    },
    {
      "name": "Pro",
      "monthlyPrice": 29,
      "yearlyPrice": 313,
      "period": "month",
      "recommended": true,
      "features": [
        "Cashflow tracking",
        "Add unlimited collaborators"
      ]
    }
  ]
}
```

## Data Validation

Use TypeScript and validation libraries for type safety:

### Zod Validation Example

```bash
npm install zod
```

```tsx
// src/lib/validations.ts
import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const BlogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().regex(/^[a-z0-9-]+$/, 'Invalid slug format'),
  content: z.string().min(1, 'Content is required'),
  excerpt: z.string().max(200, 'Excerpt too long'),
  category: z.string().min(1, 'Category is required'),
  author: z.string().min(1, 'Author is required'),
});

export type BlogPostData = z.infer<typeof BlogPostSchema>;
```

### Using Validation in API Routes

```tsx
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate data with Zod
    const validatedData = ContactFormSchema.parse(body);

    // Process validated data
    console.log('Valid contact form:', validatedData);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Caching Strategies

### Next.js Built-in Caching

```tsx
// Cache for 1 hour
const response = await fetch('https://api.example.com/data', {
  next: { revalidate: 3600 }
});

// Cache with tags for on-demand revalidation
const response = await fetch('https://api.example.com/user/123', {
  next: { tags: ['user-123'] }
});

// No caching (always fresh)
const response = await fetch('https://api.example.com/real-time', {
  cache: 'no-store'
});
```

### Manual Cache Management

```tsx
// src/lib/cache.ts
import { unstable_cache } from 'next/cache';

export const getCachedBlogPosts = unstable_cache(
  async (category?: string) => {
    // Your data fetching logic
    const posts = await fetch(`/api/blog?category=${category}`);
    return posts.json();
  },
  ['blog-posts'], // cache key
  {
    revalidate: 300, // 5 minutes
    tags: ['blog'],
  }
);
```

### Revalidating Cache

```tsx
// src/app/api/blog/revalidate/route.ts
import { revalidateTag, revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { tag, path } = await request.json();

  if (tag) {
    revalidateTag(tag);
  }

  if (path) {
    revalidatePath(path);
  }

  return NextResponse.json({ revalidated: true });
}
```

### Using React Query for Client-Side Caching

```bash
npm install @tanstack/react-query
```

```tsx
// src/app/providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

```tsx
// src/components/blog-list.tsx
'use client';

import { useQuery } from '@tanstack/react-query';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
}

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch('/api/blog');
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};

export default function BlogList() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div>
      {posts?.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
```

## Best Practices

### 1. Type Safety

```tsx
// Define clear interfaces
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  publishedAt: Date;
  author: {
    id: string;
    name: string;
    email: string;
  };
}

// Use generic types for API responses
interface ApiResponse<T> {
  data: T;
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

type BlogPostsResponse = ApiResponse<BlogPost[]>;
```

### 2. Error Handling

```tsx
// Consistent error handling
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function fetchWithErrorHandling(url: string, options?: RequestInit) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Network error', 0);
  }
}
```

### 3. Environment Configuration

```tsx
// src/lib/config.ts
const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
  },
  database: {
    url: process.env.DATABASE_URL!,
  },
  auth: {
    secret: process.env.NEXTAUTH_SECRET!,
  },
};

// Validate required environment variables
const requiredEnvVars = ['DATABASE_URL', 'NEXTAUTH_SECRET'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export default config;
```

### 4. Data Loading Patterns

```tsx
// Loading states with Suspense
export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <Suspense fallback={<BlogSkeleton />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

// Error boundaries for robust error handling
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
}
```

### 5. Performance Optimization

```tsx
// Pagination for large datasets
export async function getBlogPosts({
  page = 1,
  limit = 10,
  category,
}: {
  page?: number;
  limit?: number;
  category?: string;
}) {
  const offset = (page - 1) * limit;

  const posts = await prisma.blogPost.findMany({
    where: category ? { category } : undefined,
    take: limit,
    skip: offset,
    orderBy: { publishedAt: 'desc' },
  });

  const total = await prisma.blogPost.count({
    where: category ? { category } : undefined,
  });

  return {
    posts,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  };
}
```

### 6. Security Considerations

```tsx
// Input sanitization
import DOMPurify from 'dompurify';

export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty);
}

// Rate limiting
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    );
  }

  // Process request
}
```

## Summary

Next.js provides powerful and flexible data management patterns:

### When to Use Each Approach

1. **Static JSON Files** - For content that rarely changes (features, testimonials, navigation)
2. **Server Components** - For data that can be fetched at build time or server render time
3. **API Routes** - For dynamic operations, form submissions, and client-server communication
4. **Database Integration** - For user-generated content and complex data relationships
5. **Client-Side Fetching** - For real-time updates and interactive features

### Migration from React Router

When converting from a React Router setup:

1. Replace `useEffect` data fetching with Server Component patterns
2. Convert client-side route-based data loading to file-based API routes
3. Use Next.js caching instead of client-side state management for server data
4. Implement proper TypeScript interfaces for better type safety

### Performance Benefits

Next.js data patterns provide several performance advantages:

- **Automatic caching** at multiple levels
- **Server-side rendering** for faster initial page loads
- **Static generation** for content that doesn't change often
- **Incremental static regeneration** for the best of both worlds

## Next Steps

- **[Customize components](components-guide.md)** - Learn how components use this data
- **[Style your content](styling-guide.md)** - Visual customization techniques
- **[Optimize performance](loading-and-performance.md)** - Data loading optimization
- **[Deploy your site](deployment.md)** - Deploy with updated content