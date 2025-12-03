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
        <header className="max-w-4xl mx-auto w-full px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Meff</h1>
            <nav className="text-sm text-slate-600">
              <a className="mr-4 hover:underline" href="#about">About</a>
              <a className="mr-4 hover:underline" href="#projects">Projects</a>
              <a className="mr-4 hover:underline" href="#skills">Skills</a>
              <a className="hover:underline" href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main className="max-w-4xl mx-auto w-full px-6 pb-20">{children}</main>

        <footer className="max-w-4xl mx-auto w-full px-6 py-8 text-sm text-slate-600">
          <div className="border-t border-slate-200 pt-6">© {new Date().getFullYear()} Meff — App Developer</div>
        </footer>
      </body>
    </html>
  )
}
