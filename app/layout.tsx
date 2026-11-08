import type { Metadata, Viewport } from "next";
import "@fontsource-variable/montserrat/wght.css";
import "@fontsource-variable/inter/wght.css";
import "./globals.css";
import "./site.css";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/company";

export const viewport: Viewport = { themeColor: "#16233a" };

const businessData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "RBF Maintenance",
  url: SITE_URL,
  telephone: "+1-536-666-6991",
  email: CONTACT_EMAIL,
  areaServed: { "@type": "State", name: "Illinois" },
  description:
    "Commercial repairs and maintenance across Illinois: electrical, plumbing, HVAC, flooring, painting, drywall, fencing and general repairs.",
};

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  metadataBase: new URL(SITE_URL),
  title: "RBF Maintenance | Commercial property maintenance in Illinois",
  description:
    "Electrical, plumbing, HVAC, flooring, painting and interior repairs for commercial properties across Illinois. One team from request to closeout.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }} />
        {children}
      </body>
    </html>
  );
}
