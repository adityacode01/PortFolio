import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { GITHUB_USERNAME, site } from "@/config/portfolio";
import "./globals.css";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--f-sans", display: "swap" });
const display = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--f-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono", display: "swap" });

const title = `${site.name}: ${site.role}`;

export const metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title, description: site.description, type: "website", siteName: site.name },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport = { themeColor: "#07080c", colorScheme: "dark" };

// Only facts that are true and public: name, role, education and verified profile links.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  alumniOf: { "@type": "CollegeOrUniversity", name: "IEM Kolkata" },
  ...(site.url && { url: site.url }),
  sameAs: [`https://github.com/${GITHUB_USERNAME}`, site.linkedin].filter(Boolean),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
