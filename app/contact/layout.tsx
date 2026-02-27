import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact",
    description: "Connect with TaxoBuddy for technical support, firm-wide demos, or partnership inquiries.",
    openGraph: {
        title: "Contact TaxoBuddy | Connect with Our Team",
        description: "Get in touch for demos, support, or professional inquiries.",
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
