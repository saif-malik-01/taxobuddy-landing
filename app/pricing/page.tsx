import type { Metadata } from 'next';
import PageLayout from '../../src/components/layout/page-layout';
import PricingSection from '../../src/features/pricing/components/pricing-section';
import FAQSection from '../../src/features/pricing/components/faq-section';

export const metadata: Metadata = {
  title: "Professional Licenses — TaxoBuddy",
  description: "Secure the intelligence your firm deserves with TaxoBuddy's professional licensing options.",
};

export default function PricingPage() {
  return (
    <PageLayout title="Pricing — TaxoBuddy">
      <PricingSection />
      <FAQSection />
    </PageLayout>
  );
}