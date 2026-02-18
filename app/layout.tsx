import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Meff — App Developer",
  description: "Meff is an app developer specializing in Expo and React Native.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-50 text-slate-900">


        <main className="max-w-4xl mx-auto w-full px-6 pb-20">{children}</main>

        <footer className="max-w-4xl mx-auto w-full px-6 py-8 text-sm text-slate-600">
          <div className="border-t border-slate-200 pt-6">© 2025 Meff</div>
        </footer>
      </body>
    </html>
  )
}
