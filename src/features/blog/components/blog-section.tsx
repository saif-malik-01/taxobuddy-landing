'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogData from '../../../data/blog.json';

interface BlogPost {
  id?: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  delay?: number;
}

function BlogCard({ post, featured = false, delay = 0 }: BlogCardProps) {
  return (
    <article
      className={`group animate-fade-up ${featured ? 'lg:col-span-12 mb-16' : 'lg:col-span-4'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className={`h-full glass rounded-[2.5rem] overflow-hidden flex flex-col transition-all duration-700 border-[var(--primary)]/0 hover:border-[var(--primary)]/20 ${featured ? 'lg:flex-row' : ''}`}>

          {/* Image Area */}
          <div className={`relative overflow-hidden ${featured ? 'lg:w-[55%] aspect-[16/10]' : 'aspect-[16/10]'}`}>
            <Image
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src={post.image}
              alt={post.title}
              width={800}
              height={500}
            />
            <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-[var(--primary)] border-[var(--primary)]/20">
              {post.category}
            </div>
          </div>

          {/* Content Area */}
          <div className={`p-10 flex flex-col justify-center ${featured ? 'lg:w-[45%]' : 'flex-1'}`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)]">{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)]">{post.readTime}</span>
            </div>

            <h3 className={`font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-6 transition-colors group-hover:text-[var(--primary)] uppercase ${featured ? 'text-3xl lg:text-4xl' : 'text-xl'}`}>
              {post.title}
            </h3>

            <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed mb-10 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-auto flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-[9px] font-black uppercase tracking-widest text-[var(--text-tertiary)] px-3 py-1 bg-[var(--bg-surface)] rounded-full border border-[var(--border-subtle)]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogSection() {
  const { blogPosts, featuredPost } = blogData;

  return (
    <section className="pt-32 pb-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--primary),transparent)] opacity-[0.02] blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <header className="mb-24 animate-fade-up">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-6 block font-heading">The Laboratory</span>
          <h1 className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-8 uppercase" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>
            Intelligence <br /><span className="text-[var(--primary)]">Journal.</span>
          </h1>
          <p className="max-w-2xl text-xl text-[var(--text-secondary)] font-medium leading-relaxed">
            Explorations at the intersection of tax law, professional strategy, and high-performance neural compute.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Post */}
          {featuredPost && <BlogCard post={featuredPost} featured={true} />}

          {/* Grid of Posts */}
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={100 + (i * 100)} />
          ))}
        </div>
      </div>
    </section>
  );
}
