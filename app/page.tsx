import { Inter, Caveat } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
})

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center p-6 ${inter.className}`}
    >
      <div className="max-w-2xl mx-auto text-center space-y-10">
        {/* Decorative elements */}
        <div className="flex justify-center space-x-4 text-2xl opacity-60">
          <span>🌸</span>
          <span>💕</span>
          <span>🌸</span>
        </div>

        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-800 ${caveat.className}`}>
          Happy Birthday, Love!
        </h1>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-pink-100">
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700 font-light">
            <p>
              This year, I wanted to gift you something special ... a little digital corner of your own. This website
              and domain belong entirely to you; a place where you can freely express yourself, showcase your adorable
              apps, and let your creativity shine.
            </p>

            <p>
              I hope this becomes a space as beautiful, inspiring, and unique as you are. Fill it with your dreams, your
              stories, and all the wonderful things that make you, you.
            </p>

            <p>I'm always here cheering you on, and I can't wait to see all the amazing things you'll create.</p>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-lg md:text-xl text-gray-600 font-light">With all my love,</p>
          <p className={`text-2xl md:text-3xl font-medium mt-2 text-pink-600 ${caveat.className}`}>Snuggles</p>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center space-x-6 text-xl opacity-50 pt-4">
          <span>✨</span>
          <span>🎂</span>
          <span>🎈</span>
          <span>🎁</span>
          <span>✨</span>
        </div>
      </div>
    </div>
  )
}
