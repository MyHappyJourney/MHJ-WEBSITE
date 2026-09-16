import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Happy Journey Website - Handcrafted Kerala Tour Packages',
  description:
    'Official website for MyHappyJourney (Since 2007) offering handcrafted Kerala tour packages, deluxe houseboats, custom itineraries, and travel desk support.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M0 25 C0 8, 8 0, 25 0 L100 0 L100 100 L0 100 Z' fill='%23FF3000'/%3E%3Ctext x='50' y='50' fill='white' font-family='Georgia, serif' font-weight='900' font-size='44' text-anchor='middle' dominant-baseline='central' transform='rotate(270 50 50)'%3EMY%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    title: 'My Happy Journey Website - Handcrafted Kerala Tour Packages',
    description:
      'Official website for MyHappyJourney (Since 2007) offering handcrafted Kerala tour packages, deluxe houseboats, custom itineraries, and travel desk support.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K9SGRP4K');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9SGRP4K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
