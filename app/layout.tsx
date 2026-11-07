import type { Metadata } from "next";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import "@fontsource/barlow-condensed/600.css";
import "./globals.css";
import "./site.css";
import { SITE_URL } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RBF Maintenance | Commercial property maintenance in Illinois",
  description:
    "Electrical, plumbing, HVAC, flooring, painting and interior repairs for commercial properties across Illinois. A sister company of Buildate, serving property managers since 2000.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
