import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DASH',
  description: 'DASH AI App',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon (1).png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

