import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Siddan Infra - Infrastructure & Interior Design",
  description:
    "Elevating Spaces, Crafting Dreams. We specialize in transforming visions into reality through innovative infrastructure and interior design solutions.",
  icons: {
    icon: "https://i.ibb.co/0p3Gwr1K/New-Project-25.png", // ✅ points to your public/siddhan-logo.png
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
