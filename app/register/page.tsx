import type { Metadata } from 'next';
import PageLayout from '../../src/components/layout/page-layout';
import AuthSection from '../../src/features/auth/components/auth-section';

export const metadata: Metadata = {
  title: "Join TaxoBuddy — The Intelligent Legal Heritage",
  description: "Create your TaxoBuddy account to access professional tax and legal intelligence.",
};

export default function RegisterPage() {
  return (
    <PageLayout title="Sign Up — TaxoBuddy">
      <AuthSection type="register" />
    </PageLayout>
  );
}