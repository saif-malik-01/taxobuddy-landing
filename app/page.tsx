import PageLayout from '../src/components/layout/page-layout';
import HeroSection from '../src/features/home/components/hero-section';
import WhyUsSection from '../src/features/home/components/why-us-section';
import FeaturesSection from '../src/features/home/components/features-section';
import SecureAccessSection from '../src/features/home/components/secure-access-section';
import BillingInfrastructureSection from '../src/features/home/components/billing-infrastructure-section';

export default function HomePage() {
  return (
    <PageLayout title="TaxoBuddy — AI-Powered Tax & Legal Research Platform">
      <HeroSection />
      <WhyUsSection />
      <FeaturesSection />
      <SecureAccessSection />
      <BillingInfrastructureSection />
    </PageLayout>
  );
}