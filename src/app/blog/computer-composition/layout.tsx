import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '计算机组成',
  description: '计算机组成学习记录',
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
