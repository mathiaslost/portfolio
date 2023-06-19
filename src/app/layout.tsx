import './globals.scss'
import { Khula } from 'next/font/google'

const inter = Khula({ subsets: ['latin'], weight: ['300', '400', '600'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Gabriel Mathias is a Java Web Developer.',
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
