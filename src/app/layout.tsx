import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'ClassQuery: AI-Powered Learning Assistant for Modern Classrooms',
    template: `%s | ClassQuery`,
  },
  description: 'ClassQuery is the first LMS with an AI Tutor smart enough to assist students live in your Google Meet, Zoom, and Teams sessions. Enhance your classroom with real-time support, automated assessments, and personalized learning.',
  keywords: ['AI tutor', 'LMS', 'online learning', 'education technology', 'student engagement', 'personalized learning', 'automated grading'],
  openGraph: {
    title: 'ClassQuery: AI-Powered Learning Assistant for Modern Classrooms',
    description: 'Transform your classroom with an AI assistant that provides live support, generates lesson plans, and offers personalized feedback to students.',
    url: 'https://classquery.com',
    siteName: 'ClassQuery',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1690079374922-7f50d5c1a102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxvbmxpbmUlMjBjbGFzc3Jvb218ZW58MHx8fHwxNzU4OTg0OTM2fDA&ixlib=rb-4.1.0&q=80&w=1200',
        width: 1200,
        height: 630,
        alt: 'A diverse online classroom session with a friendly bot icon.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClassQuery: AI-Powered Learning Assistant',
    description: 'The AI assistant that joins your class. Live support for students and powerful tools for teachers.',
    creator: '@ClassQuery',
    images: ['https://images.unsplash.com/photo-1690079374922-7f50d5c1a102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxvbmxpbmUlMjBjbGFzc3Jvb218ZW58MHx8fHwxNzU4OTg0OTM2fDA&ixlib=rb-4.1.0&q=80&w=1200'],
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
  metadataBase: new URL('https://classquery.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          inter.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
