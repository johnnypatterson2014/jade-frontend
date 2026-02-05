import type { Metadata } from "next";
import "./globals.css";
import "@/styles/jade.css";
import Header from '@/components/Header';
import MainNav from '@/components/MainNav';

export const metadata: Metadata = {
  title: "Launchpad JADE",
  description: "Launchpad JADE",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <div className="flex flex-row w-full">

          <div className='flex-1'>
            <MainNav />
          </div>

          <div className='flex-10 main-content'>
            {children}
          </div>

        </div>

      </body>
    </html>
  );
}

