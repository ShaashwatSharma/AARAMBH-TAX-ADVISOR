// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display, Explora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",          // ✅ add variable
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",       // ✅ add variable
});

const explora = Explora({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-explora",        // ✅ add variable
});

export const metadata: Metadata = {
  title:
    "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj - Professional Tax & Accounting Services",
  description:
    "Expert tax consultancy, IT audit, GST returns, income tax returns, TDS returns, bookkeeping, and business accounting services. Professional tax solutions for all your business needs.",
  keywords:
    "tax consultancy, GST returns, income tax returns, TDS returns, bookkeeping, accounting services, IT audit, professional tax, EPF ESIC returns, TAN registration, Advocate Utkarsh Bhardwaj",
  authors: [{ name: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj" }],
  creator: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj",
  publisher: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arambhtaxadvisor.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj - Professional Tax & Accounting Services",
    description:
      "Expert tax consultancy, IT audit, GST returns, income tax returns, TDS returns, bookkeeping, and business accounting services.",
    url: "https://arambhtaxadvisor.com",
    siteName: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj - Professional Tax & Accounting Services",
    description:
      "Expert tax consultancy, IT audit, GST returns, income tax returns, TDS returns, bookkeeping, and business accounting services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Ensure page starts at top and navbar is visible
              if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
                document.addEventListener('DOMContentLoaded', function() {
                  const header = document.querySelector('header');
                  if (header) {
                    header.style.display = 'block';
                    header.style.visibility = 'visible';
                    header.style.opacity = '1';
                    header.style.transform = 'translateY(0)';
                  }
                });
              }
            `,
          }}
        />
      </head>

      {/* Inter is the default UI font; variables register all three fonts without changing visuals */}
      <body
        className={`${inter.className} ${inter.variable} ${playfair.variable} ${explora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}





// import type { Metadata } from "next";
// import { Inter, Playfair_Display, Explora } from 'next/font/google';
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const playfair = Playfair_Display({ subsets: ["latin"] });
// const explora = Explora({ subsets: ["latin"], weight: "400" });

// export const metadata: Metadata = {
//   title: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj - Professional Tax & Accounting Services",
//   description: "Expert tax consultancy, IT audit, GST returns, income tax returns, TDS returns, bookkeeping, and business accounting services. Professional tax solutions for all your business needs.",
//   keywords: "tax consultancy, GST returns, income tax returns, TDS returns, bookkeeping, accounting services, IT audit, professional tax, EPF ESIC returns, TAN registration, Advocate Utkarsh Bhardwaj",
//   authors: [{ name: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj" }],
//   creator: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj",
//   publisher: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj",
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL('https://arambhtaxadvisor.com'),
//   alternates: {
//     canonical: '/',
//   },
//   openGraph: {
//     title: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj - Professional Tax & Accounting Services",
//     description: "Expert tax consultancy, IT audit, GST returns, income tax returns, TDS returns, bookkeeping, and business accounting services.",
//     url: 'https://arambhtaxadvisor.com',
//     siteName: 'Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj',
//     locale: 'en_IN',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: "Aarambh Tax Advisor lead by Advocate Utkarsh Bhardwaj - Professional Tax & Accounting Services",
//     description: "Expert tax consultancy, IT audit, GST returns, income tax returns, TDS returns, bookkeeping, and business accounting services.",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   verification: {
//     google: 'your-google-verification-code',
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         <link rel="icon" type="image/png" href="/favicon.png" />
//         <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
//         <link rel="icon" type="image/png" sizes="64x64" href="/favicon.png" />
//         <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
//         <link rel="manifest" href="/site.webmanifest" />
//         <meta name="theme-color" content="#1e40af" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="format-detection" content="telephone=no" />
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               // Ensure page starts at top and navbar is visible
//               if (typeof window !== 'undefined') {
//                 window.scrollTo(0, 0);
//                 document.addEventListener('DOMContentLoaded', function() {
//                   const header = document.querySelector('header');
//                   if (header) {
//                     header.style.display = 'block';
//                     header.style.visibility = 'visible';
//                     header.style.opacity = '1';
//                     header.style.transform = 'translateY(0)';
//                   }
//                 });
//               }
//             `,
//           }}
//         />
//       </head>
//       <body className={`${inter.className} ${playfair.variable} ${explora.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }
