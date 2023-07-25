import './globals.scss';
import type { Metadata } from 'next';
import { Dancing_Script } from 'next/font/google';
import Header from './@header/page';
import Footer from './@footer/page';
import Head from 'next/head';

import localFont from 'next/font/local';
 
// Font files can be colocated inside of `app`
const avenir = localFont({
  src: './AvenirLT-Light.woff2',
  variable: '--font-avenir',
  display: 'swap',
})


const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script',
  display: 'swap',
   })

export const metadata: Metadata = {
  title: 'Restaurant | Væst | Løgstør',
  
}

export default function RootLayout({
  children,  
}: {
  children: React.ReactNode,
 
}) {
  return (
    <html lang="en" id='html' className={avenir.className}>
      <Head>
          <link rel="apple-touch-icon" sizes="120x120" href="apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"/>
          <link rel="manifest" href="site.webmanifest"/>
          <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#00aba9"/>
          <meta name="theme-color" content="#ffffff"/>
      </Head>
      <body id='body'>
        <Header />        
        {children}        
        <Footer />
        

      </body>
    </html>
  )
}
