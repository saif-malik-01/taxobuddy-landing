# Getting Started

Welcome to GlobalBank, a modern Next.js banking template designed for financial institutions and fintech companies. This template provides a comprehensive foundation for building professional banking websites with modern UI/UX patterns and optimized performance.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Server](#development-server)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Next Steps](#next-steps)

## Prerequisites

Before getting started, ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

To check your Node.js version:
```bash
node --version
```

## Installation

1. **Extract the template** to your desired location
2. **Navigate to the project directory**:
   ```bash
   cd globalbank
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
   or with yarn:
   ```bash
   yarn install
   ```

## Development Server

Start the development server to begin working on your template:

```bash
npm run dev
```

or with yarn:
```bash
yarn dev
```

The development server will start at `http://localhost:3000`. The page will automatically reload when you make changes to the code.

### Development Features

- **Hot Module Replacement (HMR)** - Changes reflect instantly
- **Fast Refresh** - React state is preserved during updates with Next.js Fast Refresh
- **Error overlay** - Build errors are displayed in the browser
- **TypeScript support** - Built-in TypeScript support
- **App Router** - Uses Next.js 15 App Router for file-based routing
- **Server and Client Components** - Optimized rendering patterns

## Building for Production

When you're ready to deploy your website:

```bash
npm run build
```

This will:
- Create an optimized production build in the `.next/` folder
- Automatically optimize and compress assets
- Generate server-side rendered pages
- Optimize images with Next.js Image component
- Create static and dynamic pages based on your App Router structure

### Preview Production Build

To preview your production build locally:

```bash
npm run start
```

## Project Structure

```
globalbank/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   ├── favicon.png        # Website favicon
│   └── template-assets/   # Template-specific assets
├── src/
│   ├── app/               # Next.js App Router (pages and layouts)
│   │   ├── globals.css    # Global styles and Tailwind CSS
│   │   ├── layout.tsx     # Root layout component
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page directory
│   │   ├── pricing/       # Pricing page directory
│   │   ├── blog/          # Blog pages directory
│   │   └── [other-routes] # Other page directories
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Common components (loading, errors)
│   │   ├── layout/        # Layout components (header, footer)
│   │   └── ui/           # UI elements (buttons, forms)
│   ├── config/           # Configuration files
│   ├── data/             # JSON data files
│   ├── features/         # Feature-specific components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions and helpers
├── docs/                 # Documentation
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # Project overview
```

## Key Features

### 🚀 **Modern Technology Stack**
- Next.js 15 with App Router and latest features
- React 19 with server and client components
- Tailwind CSS 4.x for utility-first styling
- TypeScript support for type safety

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### 🔧 **Developer Experience**
- ESLint configuration for code quality
- Fast Refresh for instant updates
- Built-in TypeScript support
- File-based routing with App Router
- Server and Client Component patterns

### 📊 **Data-Driven Content**
- JSON-based content management
- Easy to update without code changes
- Structured data for blogs, pricing, testimonials

### ⚡ **Performance Optimized**
- Automatic code splitting
- Server-side rendering (SSR)
- Static site generation (SSG)
- Next.js Image optimization
- Built-in performance optimizations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Next Steps

Now that you have the template running, here's what you should do next:

1. **[Customize your template](customization-guide.md)** - Update logo, favicon, and colors
2. **[Understand the routing system](routing-and-pages.md)** - Learn how to add new pages
3. **[Manage your content](data-management.md)** - Update JSON data files with your content
4. **[Explore components](components-guide.md)** - Understand the component structure
5. **[Style your template](styling-guide.md)** - Customize the design with Tailwind CSS

## Support

If you encounter any issues:

1. Check the [Troubleshooting guide](troubleshooting.md)
2. Review the relevant documentation sections
3. Ensure all dependencies are properly installed
4. Verify Node.js version compatibility

Happy coding! 🎉