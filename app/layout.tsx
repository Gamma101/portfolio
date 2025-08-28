import type { Metadata } from "next"
import {
  Architects_Daughter,
  Geist,
  Geist_Mono,
  Montserrat,
  Roboto,
  Rubik,
} from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const architectsDaughter = Architects_Daughter({
  variable: "--font-architect-daughter",
  subsets: ["latin"],
  weight: "400",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Danil Olenberger",
  description: "Web Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${architectsDaughter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
