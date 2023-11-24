import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xzz8ket.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
