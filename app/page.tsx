import Image from "next/image"
import React from "react"
import GridBackground from "./components/GridBackground"
import PrimarySkill from "./components/PrimarySkill"
import AdditionalSkill from "./components/AdditionalSkill"

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <GridBackground
        gridSize={30}
        gridColor="rgba(104, 189, 162, 0.2)"
        backgroundColor="#1b1b1b"
      >
        <div className="w-full h-screen flex justify-center flex-col sm:p-10 items-center">
          <h1 className="text-[130px]">
            Danil <span className="text-primary">Olenberger</span>
          </h1>
          <p className="text-4xl w-[50%] text-center">
            {"{"} <span className="text-primary">Frontend </span>Developer {"}"}
          </p>

          <div className="mt-12 w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              Skills & Technologies
            </h2>

            {/* Primary Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-300">
                Primary Skills
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <PrimarySkill name="JavaScript" src="js.svg" />
                <PrimarySkill name="HTML5" src="html5.svg" />
                <PrimarySkill name="CSS3" src="css3.svg" />
                <PrimarySkill name="React" src="react.svg" />
                <PrimarySkill name="Node.js" src="nodejs.svg" />
                <PrimarySkill name="Git" src="git.svg" />
              </div>
            </div>

            {/* Secondary Skills */}
            <div>
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-400">
                Additional Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <AdditionalSkill name="Express.js" src="expressjs.svg" />
                <AdditionalSkill name="PostgreSQL" src="postgresql.svg" />
                <AdditionalSkill name="Docker" src="docker.svg" />
                <AdditionalSkill name="Supabase" src="supabase.svg" />
                <AdditionalSkill name="Next.js" src="nextjs2.svg" />
                <AdditionalSkill name="Tailwind" src="tailwindcss.svg" />
                <AdditionalSkill name="shadcn/ui" src="shadcnui.svg" />
                <AdditionalSkill name="React Native" src="react.svg" />
                <AdditionalSkill name="Expo" src="expo.svg" />
              </div>
            </div>
            {/* Links */}
          </div>
        </div>
      </GridBackground>
    </div>
  )
}
