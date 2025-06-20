import {Philosopher } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import { Toaster } from "react-hot-toast";
 
const inter = Philosopher({ subsets: ["latin"],weight:"400" });

export const metadata = {
  title: "We-Invent",
  description: "We Invent Launching soon",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
        <TopNavBar/>
        {children}
        
        <Toaster position="bottom-center"  reverseOrder={false}/>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
