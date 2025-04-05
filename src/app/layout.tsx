import './globals.css'
import { cn } from '@/utils'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

const fontSans = Inter({ display: 'swap', subsets: ['latin'], variable: '--font-sans' })

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>{children}</body>
		</html>
	)
}
