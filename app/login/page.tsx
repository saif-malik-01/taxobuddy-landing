import type { Metadata } from 'next';
import PageLayout from '../../src/components/layout/page-layout';
import AuthSection from '../../src/features/auth/components/auth-section';

export const metadata: Metadata = {
  title: "Login — TaxoBuddy",
  description: "Sign in to your TaxoBuddy professional workspace.",
};

export default function LoginPage() {
  return (
    <PageLayout title="Sign In — TaxoBuddy">
      <AuthSection type="login" />
    </PageLayout>
  );
}