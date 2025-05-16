import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Homehub',
  description: 'Home Management App',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
