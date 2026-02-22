'use client';

import React, { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../../../src/components/layout/page-layout';
import blogData from '../../../src/data/blog.json';

interface Props {
  params: Promise<{ slug: string }>;
}

interface BlogContent {
  intro?: string;
  sections?: Array<{
    title: string;
    content: string;
  }>;
  conclusion?: string;
  keyTakeaways?: string[];
  proTip?: string;
}

interface BlogPost {
  id?: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: BlogContent | string;
  author: string;
  authorAvatar?: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogData {
  categories: string[];
  blogPosts: BlogPost[];
  featuredPost: BlogPost;
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = use(params);
  const data = blogData as BlogData;
  const post = [...data.blogPosts, data.featuredPost].find(p => p.slug === slug);

  if (!post) {
    return (
      <PageLayout title="Resource Not Found — TaxoBuddy">
        <section className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-8 block font-heading">Error 404</span>
          <h1 className="text-4xl font-black text-[var(--text-primary)] uppercase mb-12">Intelligence Missing.</h1>
          <Link href="/blog" className="px-12 py-5 bg-[var(--text-primary)] text-[var(--bg-base)] text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-[var(--primary)] transition-all">
            Return to Laboratory
          </Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`${post.title} — TaxoBuddy Journal`}>
      <main className="min-h-screen pt-32 pb-40 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,var(--primary),transparent)] opacity-[0.03] blur-[120px] pointer-events-none" />

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-6 mb-24 animate-fade-up">
          <div className="flex items-center gap-6 mb-10 overflow-x-auto whitespace-nowrap pb-2">
            <Link href="/blog" className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] hover:opacity-70 transition-opacity">← Laboratory</Link>
            <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)]">{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-subtle)]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)]">{post.readTime}</span>
          </div>

          <h1 className="font-heading font-black tracking-tight leading-tight text-[var(--text-primary)] mb-10 uppercase" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>
            {post.title}
          </h1>

          <div className="flex items-center gap-6 pt-10 border-t border-[var(--border-subtle)]">
            <div className="w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--primary)] font-black text-xs">
              {post.author.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-black uppercase tracking-widest text-[var(--text-primary)]">{post.author}</span>
              <span className="text-[10px] font-bold text-[var(--text-disabled)] uppercase tracking-widest">{post.date}</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-7xl mx-auto px-6 mb-24 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <div className="aspect-[21/9] rounded-[3rem] overflow-hidden glass border-[var(--primary)]/10">
            <Image
              src={post.image}
              alt={post.title}
              width={1600}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium leading-relaxed mb-16 italic border-l-4 border-[var(--primary)] pl-10">
              {post.excerpt}
            </p>

            <div className="space-y-16 text-[16px] md:text-[17px] text-[var(--text-secondary)] font-medium leading-relaxed">
              {typeof post.content === 'object' && post.content?.sections ? (
                <>
                  <p className="text-lg text-[var(--text-primary)] mb-12">{post.content.intro}</p>
                  {post.content.sections.map((section, idx) => (
                    <section key={idx} className="space-y-8">
                      <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--primary)] pt-12 border-t border-[var(--border-subtle)]">
                        0{idx + 1}. {section.title}
                      </h2>
                      <p className="whitespace-pre-line">{section.content}</p>
                    </section>
                  ))}
                  {post.content.conclusion && (
                    <div className="glass rounded-[2rem] p-10 mt-20 border-[var(--primary)]/10">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] mb-6">Synthesis</h3>
                      <p>{post.content.conclusion}</p>
                    </div>
                  )}
                </>
              ) : (
                <p className="whitespace-pre-line">{typeof post.content === 'string' ? post.content : post.excerpt}</p>
              )}
            </div>
          </div>

          {/* Tags & Actions */}
          <div className="mt-32 pt-16 border-t border-[var(--border-subtle)]">
            <div className="flex flex-wrap gap-8 justify-between items-center">
              <div className="flex flex-wrap gap-3">
                {post.tags.map(tag => (
                  <span key={tag} className="px-5 py-2 glass rounded-full text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)]">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-tertiary)]">Share Architecture</span>
                <div className="flex gap-4">
                  {['TW', 'LN'].map(s => (
                    <div key={s} className="w-10 h-10 rounded-xl border border-[var(--border-subtle)] flex items-center justify-center text-[10px] font-black hover:border-[var(--primary)] hover:text-[var(--primary)] cursor-pointer transition-all uppercase">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Bottom CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-40 animate-fade-up">
          <div className="glass rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/10 blur-[100px] pointer-events-none" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] mb-8 block">Join the Intelligence</span>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] uppercase tracking-tight mb-12 leading-tight">
              Ready to automate <br /> your research?
            </h2>
            <Link href="/register" className="inline-block px-12 py-5 bg-[var(--text-primary)] text-[var(--bg-base)] text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-[var(--primary)] transition-all">
              Initialize Demo
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}