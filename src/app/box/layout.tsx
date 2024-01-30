import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '杂货铺目录',
  description: '杂货铺目录',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <main className={inter.className}>{children}</main>
    <main>{children}</main>
  )
}
