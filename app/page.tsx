import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <div className={`min-h-[60vh] flex flex-col items-start justify-center py-12 ${inter.className}`}>
      <section id="about" className="w-full">
        <h2 className="text-3xl font-semibold">Hi, I'm Meff</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">
          I'm an app developer focused on building native experiences using Expo and React Native. I ship small,
          thoughtful mobile apps and prototypes that solve real user problems.
        </p>
      </section>

      <section id="projects" className="w-full mt-8">
        <h3 className="text-2xl font-medium">Selected Projects</h3>
        <ul className="mt-4 space-y-3">
          <li className="p-4 bg-white border rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Project One</div>
                <div className="text-sm text-slate-600">A small Expo app for tracking habits.</div>
              </div>
              <a className="text-sm text-sky-600 hover:underline" href="#">Live</a>
            </div>
          </li>
          <li className="p-4 bg-white border rounded-md shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Project Two</div>
                <div className="text-sm text-slate-600">Prototype for a social-native feature using React Native.</div>
              </div>
              <a className="text-sm text-sky-600 hover:underline" href="#">Repo</a>
            </div>
          </li>
        </ul>
      </section>

      <section id="skills" className="w-full mt-8">
        <h3 className="text-2xl font-medium">Skills</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-slate-100 text-sm rounded">React Native</span>
          <span className="px-3 py-1 bg-slate-100 text-sm rounded">Expo</span>
          <span className="px-3 py-1 bg-slate-100 text-sm rounded">TypeScript</span>
          <span className="px-3 py-1 bg-slate-100 text-sm rounded">Tailwind CSS</span>
        </div>
      </section>

      <section id="contact" className="w-full mt-8">
        <h3 className="text-2xl font-medium">Contact</h3>
        <p className="mt-3 text-slate-700">Interested in working together? Reach out at <a className="text-sky-600 hover:underline" href="mailto:meff@example.com">meff@example.com</a>.</p>
      </section>
    </div>
  )
}
