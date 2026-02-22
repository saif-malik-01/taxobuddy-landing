# Deployment

This guide covers deploying the GlobalBank Next.js template to various hosting platforms, with a focus on Vercel (the recommended platform for Next.js), build optimization, environment configuration, and production best practices.

## Table of Contents

- [Build Process](#build-process)
- [Environment Configuration](#environment-configuration)
- [Deployment Platforms](#deployment-platforms)
- [Domain Configuration](#domain-configuration)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Monitoring and Analytics](#monitoring-and-analytics)
- [Continuous Deployment](#continuous-deployment)

## Build Process

### Production Build

Next.js provides optimized production builds:

```bash
# Install dependencies
npm install

# Create production build
npm run build
```

This generates a `.next/` folder with optimized assets:

```
.next/
├── static/
│   ├── chunks/             # JavaScript chunks
│   ├── css/               # Compiled CSS
│   └── media/             # Optimized images
├── server/
│   ├── app/               # App Router pages
│   └── chunks/           # Server chunks
└── standalone/           # Standalone deployment files
```

### Build Configuration

Customize the build in `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // For self-hosting

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Compression
  compress: true,

  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

### Build Optimization

Next.js automatically optimizes your build:

```js
// next.config.js - Additional optimizations
const nextConfig = {
  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },

  // Bundle analyzer
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
      }
    }
    return config
  },

  // Tree shaking for unused code
  transpilePackages: ['package-name'],
}
```

## Environment Configuration

### Environment Variables

Next.js has built-in environment variable support:

```bash
# .env.local (local development - not committed)
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=postgresql://localhost:5432/dev
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# .env.production (production)
NEXTAUTH_URL=https://yourdomain.com
DATABASE_URL=postgresql://prod-db-url
NEXT_PUBLIC_API_URL=https://yourdomain.com/api

# .env.staging (staging)
NEXTAUTH_URL=https://staging.yourdomain.com
DATABASE_URL=postgresql://staging-db-url
NEXT_PUBLIC_API_URL=https://staging.yourdomain.com/api
```

### Using Environment Variables

```tsx
// src/lib/config.ts
export const config = {
  // Public variables (accessible in browser)
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,

  // Server-only variables
  databaseUrl: process.env.DATABASE_URL!,
  authSecret: process.env.NEXTAUTH_SECRET!,

  // Environment detection
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};

// Usage in components
import { config } from '@/lib/config';

function ApiService() {
  const apiUrl = config.apiUrl;
  // ... rest of service
}
```

### Runtime Configuration

```tsx
// src/lib/runtime-config.ts
const config = {
  development: {
    apiUrl: 'http://localhost:3000/api',
    enableDevTools: true,
    logLevel: 'debug'
  },
  production: {
    apiUrl: 'https://api.yourdomain.com',
    enableDevTools: false,
    logLevel: 'error'
  }
} as const;

export default config[process.env.NODE_ENV as keyof typeof config] || config.development;
```

## Deployment Platforms

### Vercel (Recommended for Next.js)

Vercel is the recommended platform for Next.js applications, offering zero-configuration deployments and optimal performance.

#### Quick Setup

1. **GitHub Integration** (Recommended):
   - Push your code to GitHub
   - Connect your repository at [vercel.com](https://vercel.com)
   - Vercel automatically detects Next.js and configures deployment

2. **Vercel CLI**:
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

3. **Configuration** (`vercel.json`) - Optional:
   ```json
   {
     "framework": "nextjs",
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "installCommand": "npm install",
     "functions": {
       "src/app/api/**/*.ts": {
         "maxDuration": 30
       }
     },
     "regions": ["iad1", "sfo1"]
   }
   ```

#### Environment Variables in Vercel

1. **Via Dashboard**:
   - Go to your project dashboard
   - Navigate to Settings → Environment Variables
   - Add variables for different environments:
     - `DATABASE_URL` (Production, Preview, Development)
     - `NEXTAUTH_SECRET` (Production only)
     - `NEXT_PUBLIC_API_URL` (All environments)

2. **Via CLI**:
   ```bash
   vercel env add DATABASE_URL production
   vercel env add NEXTAUTH_SECRET production
   ```

3. **Environment-specific values**:
   ```bash
   # Production
   vercel env add NEXT_PUBLIC_API_URL production "https://yourdomain.com/api"

   # Preview (staging)
   vercel env add NEXT_PUBLIC_API_URL preview "https://preview.yourdomain.com/api"

   # Development
   vercel env add NEXT_PUBLIC_API_URL development "http://localhost:3000/api"
   ```

#### Advanced Vercel Features

1. **Preview Deployments**:
   - Every push to branches creates preview deployments
   - Perfect for testing features before merging

2. **Edge Functions**:
   ```tsx
   // src/middleware.ts
   import { NextResponse } from 'next/server'
   import type { NextRequest } from 'next/server'

   export function middleware(request: NextRequest) {
     // Run code at the edge
     const country = request.geo?.country || 'US'

     return NextResponse.next({
       headers: {
         'x-user-country': country,
       },
     })
   }

   export const config = {
     matcher: '/api/:path*',
   }
   ```

3. **Analytics**:
   ```tsx
   // next.config.js
   const nextConfig = {
     experimental: {
       webVitalsAttribution: ['CLS', 'LCP']
     }
   }
   ```

4. **Custom Domains**:
   - Add domains in Vercel dashboard
   - Automatic SSL certificates
   - Redirects and rewrites support

### Netlify (Alternative)

#### Setup for Next.js

1. **Install Next.js Netlify Plugin**:
   ```bash
   npm install @netlify/plugin-nextjs
   ```

2. **Configuration** (`netlify.toml`):
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"

   [build.environment]
     NODE_VERSION = "18"
   ```

### Static Export for GitHub Pages

For static hosting without server features:

#### Setup

1. **Configure static export**:
   ```js
   // next.config.js
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true // Required for static export
     }
   }
   ```

2. **Update package.json**:
   ```json
   {
     "scripts": {
       "build": "next build",
       "export": "next build && next export"
     }
   }
   ```

3. **GitHub Actions workflow**:
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

> **Note**: Static export disables server-side features like API routes and dynamic rendering.

### Self-Hosting with Docker

For full control over your hosting environment:

#### Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Docker Compose for Development

```yaml
# docker-compose.yml
version: '3.8'
services:
  nextjs:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/globalbank
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=globalbank
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

#### Deployment Commands

```bash
# Build and run
docker-compose up --build

# Production deployment
docker build -t globalbank .
docker run -p 3000:3000 globalbank
```

### Railway (Simple Next.js Hosting)

Railway offers simple deployment for Next.js applications:

1. **Connect Repository**:
   - Sign up at [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway auto-detects Next.js

2. **Configuration**:
   ```bash
   # railway.json (optional)
   {
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "npm start",
       "restartPolicyType": "ON_FAILURE"
     }
   }
   ```

### Platform.sh

For enterprise deployments:

```yaml
# .platform.app.yaml
name: globalbank
type: nodejs:18

web:
  commands:
    start: npm start

disk: 1024

hooks:
  build: |
    npm ci
    npm run build

mounts:
  '/.next/cache':
    source: local
    source_path: cache
```

## Domain Configuration

### Custom Domain Setup

#### DNS Configuration

1. **A Record**: Point to your hosting provider's IP
2. **CNAME Record**: Point subdomain to hosting provider

Example DNS records:
```
Type    Name    Value
A       @       192.0.2.1
A       www     192.0.2.1
CNAME   app     your-app.vercel.app
```

#### SSL Certificate

Most platforms provide automatic SSL certificates:

- **Vercel**: Automatic SSL with Let's Encrypt
- **Netlify**: Automatic SSL with Let's Encrypt
- **CloudFront**: Use AWS Certificate Manager

### Subdomain Configuration

For multi-environment setup:

```
https://yourdomain.com          # Production
https://staging.yourdomain.com  # Staging
https://dev.yourdomain.com      # Development
```

## Performance Optimization

### Build Optimization

```js
// vite.config.js - Production optimizations
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      }
    },
    cssMinify: true,
    reportCompressedSize: false, // Faster builds
    chunkSizeWarningLimit: 1000 // Increase if needed
  }
})
```

### CDN Configuration

#### Asset CDN

```js
// Upload assets to CDN and update references
const assetsCDN = 'https://cdn.yourdomain.com';

// In build process, replace asset URLs
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'], // Use CDN versions
      output: {
        paths: {
          react: `${assetsCDN}/react@18/umd/react.production.min.js`,
          'react-dom': `${assetsCDN}/react-dom@18/umd/react-dom.production.min.js`
        }
      }
    }
  }
})
```

### Preloading and Prefetching

```html
<!-- In index.html -->
<head>
  <!-- Preload critical resources -->
  <link rel="preload" href="/fonts/main-font.woff2" as="font" type="font/woff2" crossorigin>

  <!-- Prefetch next likely pages -->
  <link rel="prefetch" href="/about">
  <link rel="prefetch" href="/pricing">

  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://api.yourdomain.com">
  <link rel="preconnect" href="https://analytics.google.com">
</head>
```

## Security Considerations

### Environment Security

```bash
# Never commit sensitive environment variables
# Use .env.local for local secrets (already in .gitignore)

# .env.local (not committed)
VITE_STRIPE_SECRET_KEY=sk_live_...
VITE_DATABASE_URL=postgres://...
```

### Content Security Policy

```html
<!-- Add to index.html -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://analytics.google.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://api.yourdomain.com;
">
```

### Secure Headers

```js
// For server-side configuration (nginx/apache)
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
};
```

## Monitoring and Analytics

### Google Analytics

```jsx
// src/utils/analytics.js
import { config } from '@config/env';

export const gtag = (...args) => {
  if (config.isProduction && window.gtag) {
    window.gtag(...args);
  }
};

// Track page views
export const trackPageView = (url) => {
  gtag('config', config.analyticsId, {
    page_path: url,
  });
};

// Track events
export const trackEvent = (action, category, label, value) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

```jsx
// Usage in router
import { trackPageView } from '@utils/analytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return <Router />;
}
```

### Error Monitoring

```jsx
// src/utils/error-monitoring.js
export const logError = (error, errorInfo) => {
  if (config.isProduction) {
    // Send to error monitoring service
    console.error('Application error:', error, errorInfo);
  }
};

// In error boundary
class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }
}
```

### Performance Monitoring

```jsx
// src/utils/performance.js
export const measurePerformance = (name, fn) => {
  if (config.isProduction) {
    performance.mark(`${name}-start`);
    const result = fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);

    // Report to analytics
    const measure = performance.getEntriesByName(name)[0];
    trackEvent('performance', name, 'duration', Math.round(measure.duration));

    return result;
  }
  return fn();
};
```

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Run tests
      run: npm test

    - name: Build application
      run: npm run build
      env:
        VITE_API_URL: ${{ secrets.VITE_API_URL }}
        VITE_ANALYTICS_ID: ${{ secrets.VITE_ANALYTICS_ID }}

    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

### Deployment Checklist

#### Pre-deployment

- [ ] Run tests locally: `npm test`
- [ ] Build successfully: `npm run build`
- [ ] Check for console errors
- [ ] Verify environment variables
- [ ] Test responsive design
- [ ] Validate accessibility
- [ ] Check SEO meta tags

#### Post-deployment

- [ ] Verify site loads correctly
- [ ] Test all routes work
- [ ] Check form submissions
- [ ] Verify analytics tracking
- [ ] Test mobile responsiveness
- [ ] Check performance metrics
- [ ] Verify SSL certificate

### Rollback Strategy

```bash
# Keep deployment backups
npm run build
cp -r dist dist-backup-$(date +%Y%m%d-%H%M%S)

# Quick rollback script
#!/bin/bash
# rollback.sh
BACKUP_DIR=$1
if [ -z "$BACKUP_DIR" ]; then
  echo "Usage: ./rollback.sh <backup-directory>"
  exit 1
fi

rm -rf dist
cp -r $BACKUP_DIR dist
# Deploy the backup
```

## Troubleshooting Deployment

### Common Issues

1. **Build fails**: Check Node.js version compatibility
2. **Routes not working**: Configure SPA fallback to `index.html`
3. **Assets not loading**: Check base URL configuration
4. **Environment variables not working**: Verify variable names start with `VITE_`

### Debug Commands

```bash
# Check build output
npm run build && ls -la dist/

# Test production build locally
npm run preview

# Check bundle size
npm run build && du -sh dist/*

# Analyze bundle
npx vite-bundle-analyzer dist/assets/*.js
```

## Next Steps

- **[Monitor performance](loading-and-performance.md)** - Set up performance monitoring
- **[Configure analytics](troubleshooting.md)** - Track user behavior
- **[Set up CI/CD](troubleshooting.md)** - Automate deployments
- **[Optimize for SEO](troubleshooting.md)** - Improve search engine visibility