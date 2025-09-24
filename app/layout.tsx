import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pranav Achar - Web Developer & Student',
  description: 'Computer Science student and web developer with 3+ years of experience creating websites for clubs, businesses, and biotech companies. Specializing in React, Next.js, and modern web technologies.',
  keywords: ['web developer', 'student', 'react', 'nextjs', 'computer science', 'portfolio'],
  authors: [{ name: 'Pranav Achar' }],
  creator: 'Pranav Achar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pranavachar-portfolio.vercel.app',
    title: 'Pranav Achar - Web Developer & Student',
    description: 'Computer Science student and web developer with 3+ years of experience creating websites for clubs, businesses, and biotech companies.',
    siteName: 'Pranav Achar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranav Achar - Web Developer & Student',
    description: 'Computer Science student and web developer with 3+ years of experience.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}