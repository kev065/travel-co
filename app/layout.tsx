import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nairobi Travel Explorer - Premium Travel & Car Rental Services",
  description:
    "Experience Kenya with our premium travel services. Safari tours, airport transfers, car rentals, and corporate travel solutions in Nairobi and beyond.",
  keywords: "Kenya travel, Nairobi tours, safari packages, car rental Kenya, airport transfers, corporate travel",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
