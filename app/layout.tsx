import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'JSM',
  description: 'JSM Tutorial',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumnail.jpg',
    "twitter:card": "summary_large-image",
    "og:url": "abdosaad.pro",
    "og:image": "https://i.ibb.co/d6TXxB2/homepage-thumnail.jpg",
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  )
}
