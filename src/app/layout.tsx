import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import {MouseSpotlight} from '@/components/ui/mouse-spotlight';

export const metadata: Metadata = {
  metadataBase: new URL('https://Restitutecore.com'),
  title: {
    default: 'Scam Recovery Services | Restitutecore',
    template: '%s | Restitutecore',
  },
  description: 'Explore scam recovery services for investment fraud, romance scams, bank transfers and cryptocurrency fraud. Request an assessment of your circumstances and available options.',
  keywords: [
    'scam recovery services',
    'financial fraud investigation',
    'crypto scam recovery',
    'investment scam recovery',
    'bank transfer scam recovery',
    'APP fraud recovery',
    'romance scam recovery',
    'pig butchering crypto scam',
    'crypto wallet recovery',
    'digital asset tracing'
  ],
  alternates: {
    canonical: 'https://Restitutecore.com',
  },
  openGraph: {
    title: 'Scam Recovery Services | Restitutecore',
    description: 'Explore scam recovery services for investment fraud, romance scams, bank transfers and cryptocurrency fraud. Request an assessment of your circumstances and available options.',
    url: 'https://Restitutecore.com',
    siteName: 'Restitutecore',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scam Recovery Services | Restitutecore',
    description: 'Explore scam recovery services for investment fraud, romance scams, bank transfers and cryptocurrency fraud.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NHXDBCBQ');`,
          }}
        />
        {/* End Google Tag Manager */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Google tag (gtag.js) - Placed before closing </head> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18466164360"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18466164360');
            `,
          }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary/30 relative">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHXDBCBQ"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <MouseSpotlight />
        {children}
        <Toaster />
        
        {/* Start of Tawk.to Script */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6ae9f649b915103c35e0c264/1k6guk469';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        {/* End of Tawk.to Script */}
      </body>
    </html>
  );
}
