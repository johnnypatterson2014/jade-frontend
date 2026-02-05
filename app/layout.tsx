import type { Metadata } from "next";
import "./globals.css";
import "@/styles/jade.css";

export const metadata: Metadata = {
  title: "Launchpad JADE",
  description: "Launchpad JADE",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

