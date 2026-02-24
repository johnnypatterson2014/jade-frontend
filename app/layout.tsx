import type { Metadata } from "next";
import "./globals.css";
import "@/styles/jade.css";
import Header from '@/components/client/Header';
import MainNav from '@/components/client/MainNav';
import { ClientContext } from '@/components/client/ClientContext'
import { MathJaxContext } from "better-react-mathjax";

export const metadata: Metadata = {
  title: "Launchpad JADE",
  description: "Launchpad JADE",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">

      <body>

        <Header />

        <div className="flex flex-row items-start mt-[15px] mb-[15px] w-full">

          <div className='flex-none ml-[20px]'>
            <div className="grid grid-cols-1 gap-[10px]">

              <MainNav />

            </div>
          </div>

          <div className='grow fesk-card ml-[15px] mr-[20px]'>
            <div className="main-content">
              <MathJaxContext>

                <ClientContext>

                  {children}

                </ClientContext>

              </MathJaxContext>
            </div>
          </div>

        </div>

      </body>
    </html>
  );
}

