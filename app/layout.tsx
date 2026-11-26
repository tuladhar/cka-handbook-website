import type React from "react"
import type { Metadata } from "next"
import { League_Spartan } from "next/font/google"
import "./globals.css"

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-spartan",
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
    <html lang="en" className={spartan.variable}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  )
}
