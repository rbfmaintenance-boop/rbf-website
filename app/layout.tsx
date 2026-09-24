import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RBF Maintenance | Commercial Property Maintenance & Repairs",
  description:
    "RBF Maintenance handles electrical, plumbing, HVAC, flooring, and interior repairs for commercial properties, with one point of contact for every job.",
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
