import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Mangalam Shaadi - Find Your Perfect Life Partner",
  description:
    "India's most trusted matrimonial website. Find your perfect life partner from millions of verified profiles.",
  keywords: "matrimony, marriage, wedding, bride, groom, life partner, mangalam shaadi",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'