import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMB Rank Tracker – Track Google My Business Rankings",
  description: "Monitor local search rankings for your Google My Business listings across different locations and keywords. Real-time dashboards for local SEO."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1c0ade5a-bbc9-4a45-a2a6-abf39713df77"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
