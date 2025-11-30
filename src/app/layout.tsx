import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F0F14',
}

export const metadata: Metadata = {
  title: 'VaultLock - Secure Password Manager | Your Passwords. Your Control. Zero Compromise.',
  description: 'The most secure, offline password manager. Military-grade AES-256-GCM encryption. No servers. No subscriptions. 100% private. Download VaultLock for Android & iOS.',
  keywords: ['password manager', 'security', 'encryption', 'AES-256', 'offline', 'privacy', 'vault', 'biometric', 'android', 'ios'],
  authors: [{ name: 'Bhargav', url: 'https://github.com/Bhargavvz' }],
  creator: 'Bhargav',
  publisher: 'VaultLock',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaultlock.app',
    siteName: 'VaultLock',
    title: 'VaultLock - Secure Password Manager',
    description: 'The most secure, offline password manager. Military-grade AES-256-GCM encryption. No servers. No subscriptions. 100% private.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VaultLock Password Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VaultLock - Secure Password Manager',
    description: 'The most secure, offline password manager. Military-grade AES-256-GCM encryption.',
    images: ['/og-image.png'],
    creator: '@Bhargavvz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
