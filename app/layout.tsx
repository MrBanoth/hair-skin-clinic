import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Analytics from "@/components/Analytics"
import BookingButton from "@/components/BookingButton"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const defaultTitle = "Luxe Hair & Skin Clinic - Premium Beauty Treatments";
const defaultDescription = "Transform your beauty with our premium hair and skin treatments. Expert dermatologists, state-of-the-art technology, and personalized care.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luxeclinic.com';

export const metadata: Metadata = {
  title: {
    default: defaultTitle,
    template: `%s | Luxe Hair & Skin Clinic`
  },
  description: defaultDescription,
  keywords: [
    "hair clinic", 
    "skin clinic", 
    "dermatology", 
    "beauty treatments", 
    "laser hair removal", 
    "facials", 
    "aesthetic medicine",
    "skin care",
    "hair care",
    "dermatologist"
  ],
  authors: [{ 
    name: "Luxe Hair & Skin Clinic",
    url: siteUrl
  }],
  creator: "Luxe Hair & Skin Clinic",
  publisher: "Luxe Hair & Skin Clinic",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Luxe Hair & Skin Clinic",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Luxe Hair & Skin Clinic - Premium Beauty Treatments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@luxeclinic",
    images: [`${siteUrl}/images/twitter-image.jpg`],
  },
  icons: {
    icon: [
      { url: '/hospital.png' },
      { url: '/hospital.png', sizes: '16x16', type: 'image/png' },
      { url: '/hospital.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/hospital.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: {
    index: process.env.NODE_ENV === 'production',
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      noimageindex: false,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
    yandex: process.env.YANDEX_VERIFICATION || '',
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable} font-sans`}>
      <head>
        <link rel="icon" href="/hospital.png" type="image/png" />
        <link rel="icon" href="/hospital.png" type="image/png" />
        <link rel="apple-touch-icon" href="/hospital.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f43f5e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Luxe Clinic" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#f43f5e" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:underline"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
        <BookingButton />
      </body>
    </html>
  )
}
