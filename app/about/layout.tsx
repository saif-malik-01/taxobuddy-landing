import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About",
    description: "Learn about TaxoBuddy's mission to digitize 60 years of legal heritage into a high-performance neural ecosystem for tax and legal professionals.",
    openGraph: {
        title: "About TaxoBuddy | Intelligent Legal Heritage",
        description: "The story behind the India's most authoritative AI engine for tax and law.",
    }
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
