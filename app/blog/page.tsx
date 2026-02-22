import type { Metadata } from 'next';
import PageLayout from '../../src/components/layout/page-layout';
import BlogSection from '../../src/features/blog/components/blog-section';

export const metadata: Metadata = {
  title: "Intelligence Journal — TaxoBuddy",
  description: "Stay ahead with the latest insights in tax, law, and AI from the TaxoBuddy laboratory.",
};

export default function BlogPage() {
  return (
    <PageLayout title="Blog — TaxoBuddy">
      <BlogSection />
    </PageLayout>
  );
}