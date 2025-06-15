import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manohar associate',
  description: 'Manohar Associates',
  generator: 'Rohit Koktare',
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
