import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Providers } from "@/GlobalRedux/Provider";
import Navbar from '@/components/global/Navbar/Navbar';
import Footer from '@/components/global/Footer/Footer';

const poppins = Poppins({
  weight: ['400', '500', '300', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Live Sports",
  description: "Live Sports",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${poppins.className} text-sm `}>
        <Providers>
          <Navbar />
          <div className="mx-4 lg:mx-28 xl:mx-60 min-h-[200vh]">
            {children}
          </div>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html >
  );
}