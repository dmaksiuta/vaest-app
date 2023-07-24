

import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './@header/page';
import Footer from './@footer/page';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Restaurant | Væst | Løgstør',
  // description: 'Generated by create next app',
}

export default function RootLayout({
  children,  
}: {
  children: React.ReactNode,
 
}) {
  return (
    <html lang="en" id='html'>
      <body className={inter.className} id='body'>
        <Header />        
        {children}        
        <Footer />
        

      </body>
    </html>
  )
}
