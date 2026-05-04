import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Bot Permission Auditor",
  description: "Audit Discord bot permissions across servers. Scan all bots, flag overprivileged permissions, and get actionable security recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f480879c-9f27-45a6-8608-1da735718041"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
