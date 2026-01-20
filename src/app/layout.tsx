import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ReactLenis } from "lenis/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fatih's Portfolio",
  description:
    "Hi there! My name is Abdullah Al Fatih. I have hobby in the web development. Try to connect with me and let's see how we can work together.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[100px]">
      <body className={inter.className}>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  )
}
