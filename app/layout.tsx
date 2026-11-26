import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plex",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
})

export const metadata: Metadata = {
  title: "CKA Exam Guide: The missing book by a Kubestronaut",
  description:
    "A practical guide to passing the Certified Kubernetes Administrator (CKA) exam, aligned with the current curriculum.",
  openGraph: {
    title: "CKA Exam Guide: The missing book by a Kubestronaut",
    description: "A practical guide to passing the Certified Kubernetes Administrator (CKA) exam.",
    url: "https://cka.purutuladhar.com",
    images: ["/images/book-cover.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plex.variable} ${plexMono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  )
}
