import './globals.css'
import { Inter } from 'next/font/google'
import main from './page.module.scss';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={main.container}>{children}</body>
    </html>
  )
}
