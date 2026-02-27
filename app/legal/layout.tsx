import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Legal",
    description: "TaxoBuddy's professional legal framework, including privacy policies, payment terms, and data retention standards.",
};

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
